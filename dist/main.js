/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_makeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/makeMap */ "./src/scripts/makeMap.js");
/* harmony import */ var _scripts_makeGlobe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/makeGlobe */ "./src/scripts/makeGlobe.js");


var width = 500;
var height = 500;
var speed = 100000;
var scale = 500; //cant figure out how to get the transform to work
// let scale = 60000;

var config = {
  speed: 0.005,
  verticalTilt: -10,
  horizontalTilt: 0
};
d3.select('#world-map').attr("width", "100vw").attr("height", "100vh").attr("style", "outline: thin solid black");
d3.select('#depth-graph').attr("width", width).attr("height", height).attr("style", "outline: thin solid black"); // d3.select('#location-graph')
//     .attr("width" ,width)
//     .attr("height", height)
//     .attr("style", "outline: thin solid black")

document.addEventListener("DOMContentLoaded", function () {
  Object(_scripts_makeGlobe__WEBPACK_IMPORTED_MODULE_1__["makeGlobe"])();
});

/***/ }),

/***/ "./src/scripts/depth.js":
/*!******************************!*\
  !*** ./src/scripts/depth.js ***!
  \******************************/
/*! exports provided: renderDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDepth", function() { return renderDepth; });
var renderDepth = function renderDepth(data, speed) {
  var svg = d3.select('#depth-graph');

  var xValue = function xValue(d) {
    return d.timestamp1;
  };

  var xLabel = "Time";

  var yValue = function yValue(d) {
    return d.depth;
  };

  var yLabel = "depth"; // const margin = { left: 120, right: 30, top: 20, bottom: 120 };

  var margin = {
    left: 40,
    right: 0,
    top: 0,
    bottom: 0
  };
  var width = svg.attr('width');
  var height = svg.attr('height');
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));
  var xAxisG = g.append('g'); // .attr('transform', `translate(0, ${innerHeight})`);

  var yAxisG = g.append('g');
  xAxisG.append('text').attr('class', 'axis-label').attr('x', innerWidth / 2).attr('y', 100).text(xLabel);
  yAxisG.append('text').attr('class', 'axis-label').attr('x', -innerHeight / 2).attr('y', -40).attr('transform', "rotate(-90)").style('text-anchor', 'middle').text(yLabel);
  var xScale = d3.scaleTime();
  var yScale = d3.scaleLinear();
  var startDate = data[0].timestamp1;
  var finishDate = data[data.length - 1].timestamp1;
  var xAxis = d3.axisBottom().scale(xScale).tickPadding(20) // .ticks(d3.utcMinute.every(60))
  //   .tickValues(d3.timeMinutes(startDate, finishDate,5))
  .tickSize(-innerHeight);
  var yAxis = d3.axisLeft().scale(yScale).ticks(5).tickPadding(15).tickSize(-innerWidth);
  var nested = d3.nest().key(function (d) {
    return d.whaleId;
  }).entries(data);
  console.log(nested);
  xScale.domain(d3.extent(data, xValue)).range([0, innerWidth]).nice();
  yScale.domain(d3.extent(data, yValue)).range([0, innerHeight]).nice();
  var path = svg.append("path").attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")")).datum(data).attr("fill", "none").attr("class", "line").attr("stroke", "blue").attr("stroke-width", 1.5).attr("d", d3.line().x(function (d) {
    return xScale(xValue(d));
  }).y(function (d) {
    return yScale(yValue(d));
  }));
  var totalLength = path.node().getTotalLength();
  path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(speed).ease(d3.easeLinear).attr("stroke-dashoffset", 0); //  g.selectAll('circle').data(data)
  //    .enter().append('circle')
  //      .attr('cx', (d) =>  xScale(xValue(d)))
  //      .attr('cy', d => yScale(yValue(d)))
  //      .attr('fill-opacity', 0.6)
  //      .attr('r', 8);

  xAxisG.call(xAxis);
  yAxisG.call(yAxis);
};

/***/ }),

/***/ "./src/scripts/makeGlobe.js":
/*!**********************************!*\
  !*** ./src/scripts/makeGlobe.js ***!
  \**********************************/
/*! exports provided: drawGlobe, enableRotation, makeGlobe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGlobe", function() { return drawGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableRotation", function() { return enableRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGlobe", function() { return makeGlobe; });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition.js */ "./src/scripts/transition.js");

var svg = d3.select('#world-map');
console.log(+svg.style("width").slice(0, -2));
var projection = d3.geoOrthographic();
var initialScale = projection.scale(400);
var path = d3.geoPath().projection(projection);
var config = {
  speed: .005,
  verticalTilt: -10,
  horizontalTilt: 0
};
var ocean;
var g = svg.append("g");
function drawGlobe() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000;
  var width = +svg.style("width").slice(0, -2);
  var height = +svg.style("height").slice(0, -2);
  projection.translate([width / 2, height / 2]).rotate([82.407]); // const background = document.getElementById("world-background")
  // background
  //     .translate([width /2, height /2])

  d3.queue().defer(d3.json, './ne_110m_ocean.json').await(function (error, data, locationData) {
    ocean = g.selectAll(".segment").data(topojson.feature(data, data.objects.ne_110m_ocean).features).enter().append("path").attr("class", "segment").attr("d", path).style("fill", function () {
      return '#070C58';
    });
  });
}
function enableRotation() {
  var svg = d3.select('#world-map');
  var a = d3.timer(function (elapsed) {
    projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
    svg.selectAll("path").attr("d", path);
  });
  d3.select("#track").on("click", function () {
    var target = [-112.407, 28.1087]; // const zoomSettings = {
    //     duration: 1000,
    //     ease: d3.easeCubicOut,
    //     zoomLevel: 5
    // }

    var zoom = d3.zoom().scaleExtent([1, 40]).on("zoom", zoomed);

    function zoomed() {
      g.attr("transform", d3.event.transform);
    }

    var width = +svg.style("width").slice(0, -2);
    var height = +svg.style("height").slice(0, -2);
    console.log("stop");
    a.stop();
    _transition_js__WEBPACK_IMPORTED_MODULE_0__["removeSplashUi"](); // transition.addTrackingUi()

    d3.transition().delay(250).duration(3500).tween("rotate", function () {
      var point = [-112.407, 28.1087];
      var rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
      var scaleGradient = d3.interpolate(projection.scale(), 60000);
      return function (t) {
        projection.rotate(rotatationGradient(t));
        projection.scale(scaleGradient(t));
        ocean.attr("d", path);
      };
    });
  });
}
function makeGlobe() {
  drawGlobe();
  enableRotation();
}

/***/ }),

/***/ "./src/scripts/makeMap.js":
/*!********************************!*\
  !*** ./src/scripts/makeMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _depth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./depth */ "./src/scripts/depth.js");



var makeMap = function makeMap(speed, scale, data) {
  console.log("built");
  d3.select("#speed-down").on("click", function () {
    console.log("down");
    speed = 10000000;
    console.log(speed);
  });
  var svg = d3.select('#world-map');
  var g = svg.append("g");

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }

  var zoom = d3.zoom().scaleExtent([1, 600000]).on("zoom", zoomed);
  svg.call(zoom);
  d3.queue().defer(d3.json, "./ne_110m_ocean.json").await(ready);
  var projection = d3.geoMercator().scale(scale).center([-112.407, 28.1087]);
  var path = d3.geoPath().projection(projection);

  function ready(error, data) {
    var ocean = topojson.feature(data, data.objects.ne_110m_ocean).features;
    console.log(ocean);
    svg.selectAll(".ocean").data(ocean).enter().append("path").attr("class", "ocean").attr("d", path).attr("fill", "#070C58");
    d3.csv('./test.csv', function (data) {
      data.forEach(function (d) {
        d.depth = +d.hdop;
        d.timestamp1 = new Date(d.timestamp);
        d.locationLong = +d.locationLong;
        d.locationLat = +d.locationLat;
        d3.select("#start").on("click", function () {
          var linePath = svg.append("path").datum(data).attr("fill", "none").attr("stroke", "white").attr("class", "line").attr("stroke-width", 3).attr("d", d3.line().x(function (d) {
            return projection([d.locationLong, d.locationLat])[0];
          }).y(function (d) {
            return projection([d.locationLong, d.locationLat])[1];
          }).curve(d3.curveCardinal));
          var totalLength = linePath.node().getTotalLength();
          linePath.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(speed).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
          Object(_depth__WEBPACK_IMPORTED_MODULE_1__["renderDepth"])(data, speed);
        });
        d3.select("#reset").on("click", function () {
          d3.selectAll(".line").remove();
          console.log("reset");
          console.log(speed);
        });
        d3.select("#speed-up").on("click", function () {
          // const svg = d3.select('#world-map')
          // const projection = d3.geoMercator()
          // .scale(scale)
          // .center([-112.407,28.1087])
          console.log("click");
          var x = projection([-112.407, 28.1087])[0];
          var y = projection([-112.407, 28.1087])[1];
          var newScale = 600000;
          svg.transition().duration(2500).call(zoom.transform, d3.zoomIdentity.scale(newScale).translate(-x, -y));
        });
      });
    });
  }
}; //  d3.select("#speed-up").on("click", ()=>{
//     // const svg = d3.select('#world-map')
//     // const projection = d3.geoMercator()
//     // .scale(scale)
//     // .center([-112.407,28.1087])
//     // console.log("click")
//     // const g = svg.append("g")
//     // function zoomed() {
//     // g.attr("transform", d3.event.transform);
//     // }  
//       const zoom = d3.zoom()
//       .scaleExtent([1, 600000])
//       .on("zoom", zoomed);
//       svg.call(zoom);      
//     const x = projection([-112.407,28.1087])[0];
//     const y = projection([-112.407,28.1087])[1];
//     let newScale = 600000
//     svg.transition().duration(2500).call(
//         zoom.transform,
//         d3.zoomIdentity.scale(newScale).translate(-x, -y));
//   console.log("click2")
//         // d3.selectAll('#world-map > path')
//         // .remove();
//         // makeMap(speed,60000)
// })


/* harmony default export */ __webpack_exports__["default"] = (makeMap);

/***/ }),

/***/ "./src/scripts/transition.js":
/*!***********************************!*\
  !*** ./src/scripts/transition.js ***!
  \***********************************/
/*! exports provided: removeSplashUi, addTrackingUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSplashUi", function() { return removeSplashUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrackingUi", function() { return addTrackingUi; });
function removeSplashUi() {
  var splashUi = document.getElementsByClassName("start-page")[0];
  splashUi.setAttribute("h", true);
}
function addTrackingUi() {
  var trackUi = document.getElementsByClassName("tracking-page")[0];
  trackUi.setAttribute("h", false);
} // export function zoom() {
//     const target = [-112.407,28.1087];
//     function zoomTo(location, scale) {
//         var point = projection(location);
//         return zoom
//            .translate([width / 2 - point[0] * scale, height / 2 - point[1] * scale])
//            .scale(scale);
//     }
// }

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RlcHRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ha2VHbG9iZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWtlTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJzY2FsZSIsImNvbmZpZyIsInZlcnRpY2FsVGlsdCIsImhvcml6b250YWxUaWx0IiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUdsb2JlIiwicmVuZGVyRGVwdGgiLCJkYXRhIiwic3ZnIiwieFZhbHVlIiwiZCIsInRpbWVzdGFtcDEiLCJ4TGFiZWwiLCJ5VmFsdWUiLCJkZXB0aCIsInlMYWJlbCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImciLCJhcHBlbmQiLCJ4QXhpc0ciLCJ5QXhpc0ciLCJ0ZXh0Iiwic3R5bGUiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInN0YXJ0RGF0ZSIsImZpbmlzaERhdGUiLCJsZW5ndGgiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ0aWNrUGFkZGluZyIsInRpY2tTaXplIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibmVzdGVkIiwibmVzdCIsImtleSIsIndoYWxlSWQiLCJlbnRyaWVzIiwiY29uc29sZSIsImxvZyIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwibmljZSIsInBhdGgiLCJkYXR1bSIsImxpbmUiLCJ4IiwieSIsInRvdGFsTGVuZ3RoIiwibm9kZSIsImdldFRvdGFsTGVuZ3RoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJjYWxsIiwic2xpY2UiLCJwcm9qZWN0aW9uIiwiZ2VvT3J0aG9ncmFwaGljIiwiaW5pdGlhbFNjYWxlIiwiZ2VvUGF0aCIsIm9jZWFuIiwiZHJhd0dsb2JlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicXVldWUiLCJkZWZlciIsImpzb24iLCJhd2FpdCIsImVycm9yIiwibG9jYXRpb25EYXRhIiwic2VsZWN0QWxsIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsIm5lXzExMG1fb2NlYW4iLCJmZWF0dXJlcyIsImVudGVyIiwiZW5hYmxlUm90YXRpb24iLCJhIiwidGltZXIiLCJlbGFwc2VkIiwib24iLCJ0YXJnZXQiLCJ6b29tIiwic2NhbGVFeHRlbnQiLCJ6b29tZWQiLCJldmVudCIsInRyYW5zZm9ybSIsInN0b3AiLCJkZWxheSIsInR3ZWVuIiwicG9pbnQiLCJyb3RhdGF0aW9uR3JhZGllbnQiLCJpbnRlcnBvbGF0ZSIsInNjYWxlR3JhZGllbnQiLCJ0IiwibWFrZU1hcCIsInJlYWR5IiwiZ2VvTWVyY2F0b3IiLCJjZW50ZXIiLCJjc3YiLCJmb3JFYWNoIiwiaGRvcCIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJsb2NhdGlvbkxvbmciLCJsb2NhdGlvbkxhdCIsImxpbmVQYXRoIiwiY3VydmUiLCJjdXJ2ZUNhcmRpbmFsIiwicmVtb3ZlIiwibmV3U2NhbGUiLCJ6b29tSWRlbnRpdHkiLCJyZW1vdmVTcGxhc2hVaSIsInNwbGFzaFVpIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImFkZFRyYWNraW5nVWkiLCJ0cmFja1VpIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdla0Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDaktBO0FBQUE7QUFBQTtBQUFPLFNBQVNpQixjQUFULEdBQTBCO0FBQzdCLE1BQU1DLFFBQVEsR0FBRzNILFFBQVEsQ0FBQzRILHNCQUFULENBQWdDLFlBQWhDLEVBQThDLENBQTlDLENBQWpCO0FBQ0FELFVBQVEsQ0FBQ0UsWUFBVCxDQUFzQixHQUF0QixFQUEyQixJQUEzQjtBQUVIO0FBRU0sU0FBU0MsYUFBVCxHQUF5QjtBQUM1QixNQUFNQyxPQUFPLEdBQUcvSCxRQUFRLENBQUM0SCxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRCxDQUFqRCxDQUFoQjtBQUNBRyxTQUFPLENBQUNGLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUI7QUFDSCxDLENBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLEk7Ozs7Ozs7Ozs7O0FDdEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IG1ha2VNYXAgZnJvbSBcIi4vc2NyaXB0cy9tYWtlTWFwXCJcbmltcG9ydCB7ZHJhd0dsb2JlLCBlbmFibGVSb3RhdGlvbiwgbWFrZUdsb2JlfSBmcm9tIFwiLi9zY3JpcHRzL21ha2VHbG9iZVwiXG5cbmNvbnN0IHdpZHRoID0gNTAwO1xuY29uc3QgaGVpZ2h0ID0gNTAwXG5cbmxldCBzcGVlZD0gMTAwMDAwXG5sZXQgc2NhbGUgPSA1MDAgLy9jYW50IGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgdHJhbnNmb3JtIHRvIHdvcmtcbi8vIGxldCBzY2FsZSA9IDYwMDAwO1xuY29uc3QgY29uZmlnID0ge1xuICAgIHNwZWVkOiAwLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxuICB9XG4gXG5cbmQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG4gICAgLmF0dHIoXCJ3aWR0aFwiICxcIjEwMHZ3XCIpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDB2aFwiKVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG5cblxuZDMuc2VsZWN0KCcjZGVwdGgtZ3JhcGgnKVxuICAgIC5hdHRyKFwid2lkdGhcIiAsd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG4gICAgXG4vLyBkMy5zZWxlY3QoJyNsb2NhdGlvbi1ncmFwaCcpXG4vLyAgICAgLmF0dHIoXCJ3aWR0aFwiICx3aWR0aClcbi8vICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4vLyAgICAgLmF0dHIoXCJzdHlsZVwiLCBcIm91dGxpbmU6IHRoaW4gc29saWQgYmxhY2tcIilcblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5tYWtlR2xvYmUoKVxufSkiLCJcblxuZXhwb3J0IGNvbnN0IHJlbmRlckRlcHRoID0gKGRhdGEsc3BlZWQpID0+e1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RlcHRoLWdyYXBoJylcbiAgICBjb25zdCB4VmFsdWUgPSBkID0+IGQudGltZXN0YW1wMTtcbiAgICBjb25zdCB4TGFiZWwgPSBcIlRpbWVcIjtcbiAgICBjb25zdCB5VmFsdWUgPSBkID0+IGQuZGVwdGg7XG4gICAgY29uc3QgeUxhYmVsID0gXCJkZXB0aFwiO1xuICAgIC8vIGNvbnN0IG1hcmdpbiA9IHsgbGVmdDogMTIwLCByaWdodDogMzAsIHRvcDogMjAsIGJvdHRvbTogMTIwIH07XG4gICAgY29uc3QgbWFyZ2luID0geyBsZWZ0OiA0MCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH07XG5cblxuICAgIGNvbnN0IHdpZHRoID0gc3ZnLmF0dHIoJ3dpZHRoJylcbiAgICBjb25zdCBoZWlnaHQgPSBzdmcuYXR0cignaGVpZ2h0JylcbiAgICBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG4gICAgICBjb25zdCB4QXhpc0cgPSBnLmFwcGVuZCgnZycpXG4gICAgICAgICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtpbm5lckhlaWdodH0pYCk7XG4gICAgICBjb25zdCB5QXhpc0cgPSBnLmFwcGVuZCgnZycpO1xuXG4gICAgICB4QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcy1sYWJlbCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCBpbm5lcldpZHRoIC8gMilcbiAgICAgICAgICAuYXR0cigneScsIDEwMClcbiAgICAgICAgICAudGV4dCh4TGFiZWwpO1xuXG4gICAgICB5QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcy1sYWJlbCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAtaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgICAgIC5hdHRyKCd5JywgLTQwKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgcm90YXRlKC05MClgKVxuICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAudGV4dCh5TGFiZWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBzdGFydERhdGUgPSBkYXRhWzBdLnRpbWVzdGFtcDE7XG4gICAgICAgICAgY29uc3QgZmluaXNoRGF0ZSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS50aW1lc3RhbXAxOyBcblxuXG4gICAgICAgICAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSlcbiAgICAgICAgICAgIC50aWNrUGFkZGluZygyMClcbiAgICAgICAgICAgIC8vIC50aWNrcyhkMy51dGNNaW51dGUuZXZlcnkoNjApKVxuICAgICAgICAgICAgLy8gICAudGlja1ZhbHVlcyhkMy50aW1lTWludXRlcyhzdGFydERhdGUsIGZpbmlzaERhdGUsNSkpXG4gICAgICAgICAgICAudGlja1NpemUoLWlubmVySGVpZ2h0KTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgIC50aWNrcyg1KVxuICAgICAgICAgIC50aWNrUGFkZGluZygxNSlcbiAgICAgICAgICAudGlja1NpemUoLWlubmVyV2lkdGgpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbmVzdGVkID0gZDMubmVzdCgpXG4gICAgICAgICAgLmtleSggZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHJldHVybiBkLndoYWxlSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5lbnRyaWVzKGRhdGEpXG4gICAgICAgIDtcbiAgICAgICAgY29uc29sZS5sb2cobmVzdGVkKVxuICAgICAgICBcbiAgICAgICAgeFNjYWxlXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIHhWYWx1ZSkpXG4gICAgICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pXG4gICAgICAgIC5uaWNlKCk7XG4gICAgICAgIFxuICAgICAgICB5U2NhbGVcbiAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgeVZhbHVlKSlcbiAgICAgICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pXG4gICAgICAgIC5uaWNlKCk7XG5cbiAgIGNvbnN0IHBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYClcbiAgICAuZGF0dW0oZGF0YSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKHhWYWx1ZShkKSkgfSlcbiAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZSh5VmFsdWUoZCkpIH0pXG4gICAgICApXG5cbiAgICAgIHZhciB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgIHBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgIC5kdXJhdGlvbihzcGVlZCkgXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cblxuICAgIC8vICBnLnNlbGVjdEFsbCgnY2lyY2xlJykuZGF0YShkYXRhKVxuICAgIC8vICAgIC5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcbiAgICAvLyAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiAgeFNjYWxlKHhWYWx1ZShkKSkpXG4gICAgLy8gICAgICAuYXR0cignY3knLCBkID0+IHlTY2FsZSh5VmFsdWUoZCkpKVxuICAgIC8vICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDAuNilcbiAgICAvLyAgICAgIC5hdHRyKCdyJywgOCk7XG5cbiAgICAgeEF4aXNHLmNhbGwoeEF4aXMpO1xuICAgICB5QXhpc0cuY2FsbCh5QXhpcyk7XG4gICAgICB9OyIsImltcG9ydCAqIGFzIHRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG5jb25zb2xlLmxvZygrc3ZnLnN0eWxlKFwid2lkdGhcIikuc2xpY2UoMCwtMikpXG5cbmxldCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKClcblxuY29uc3QgaW5pdGlhbFNjYWxlID0gcHJvamVjdGlvbi5zY2FsZSg0MDApO1xuXG5jb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBzcGVlZDogLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxufVxuXG5sZXQgb2NlYW5cblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3R2xvYmUoc3BlZWQgPSAxMDAwMDApIHsgIFxuICAgIGNvbnN0IHdpZHRoID0gK3N2Zy5zdHlsZShcIndpZHRoXCIpLnNsaWNlKDAsLTIpXG4gICAgY29uc3QgaGVpZ2h0ID0gK3N2Zy5zdHlsZShcImhlaWdodFwiKS5zbGljZSgwLC0yKVxuICAgIFxuICAgIHByb2plY3Rpb25cbiAgICAgICAgLnRyYW5zbGF0ZShbd2lkdGggLzIsIGhlaWdodCAvMl0pXG4gICAgICAgIC5yb3RhdGUoWzgyLjQwN10pXG5cbiAgICAvLyBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZC1iYWNrZ3JvdW5kXCIpXG5cbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgLy8gICAgIC50cmFuc2xhdGUoW3dpZHRoIC8yLCBoZWlnaHQgLzJdKVxuXG4gICAgZDMucXVldWUoKVxuICAgICAgICAuZGVmZXIoZDMuanNvbiwgJy4vbmVfMTEwbV9vY2Vhbi5qc29uJykgICAgICAgICAgXG4gICAgICAgIC5hd2FpdCgoZXJyb3IsIGRhdGEsIGxvY2F0aW9uRGF0YSkgPT4ge1xuICAgICAgICAgICBvY2VhbiA9IGcuc2VsZWN0QWxsKFwiLnNlZ21lbnRcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKGRhdGEsIGRhdGEub2JqZWN0cy5uZV8xMTBtX29jZWFuKS5mZWF0dXJlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlZ21lbnRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsICgpID0+ICcjMDcwQzU4JylcbiAgICAgICAgfSk7XG4gICAgfSAgIFxuXG5cbiAgICAgICAgXG4gICAgICAgICAgICBcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVJvdGF0aW9uKCkge1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG5cblxuICBsZXQgYSA9IGQzLnRpbWVyKGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICAgIHByb2plY3Rpb24ucm90YXRlKFtjb25maWcuc3BlZWQgKiBlbGFwc2VkIC0gMTIwLCBjb25maWcudmVydGljYWxUaWx0LCBjb25maWcuaG9yaXpvbnRhbFRpbHRdKTtcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInBhdGhcIikuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgfSk7XG5cbiAgICBkMy5zZWxlY3QoXCIjdHJhY2tcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gWy0xMTIuNDA3LDI4LjEwODddO1xuICAgICAgICAgICAgLy8gY29uc3Qgem9vbVNldHRpbmdzID0ge1xuICAgICAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgLy8gICAgIGVhc2U6IGQzLmVhc2VDdWJpY091dCxcbiAgICAgICAgICAgIC8vICAgICB6b29tTGV2ZWw6IDVcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3Qgem9vbSA9IGQzLnpvb20oKVxuICAgICAgICAgICAgLnNjYWxlRXh0ZW50KFsxLCA0MF0pXG4gICAgICAgICAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgICAgICAgICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9ICtzdmcuc3R5bGUoXCJ3aWR0aFwiKS5zbGljZSgwLC0yKVxuICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSArc3ZnLnN0eWxlKFwiaGVpZ2h0XCIpLnNsaWNlKDAsLTIpXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKVxuICAgICAgICBhLnN0b3AoKVxuICAgICAgICB0cmFuc2l0aW9uLnJlbW92ZVNwbGFzaFVpKClcbiAgICAgICAgLy8gdHJhbnNpdGlvbi5hZGRUcmFja2luZ1VpKClcblxuICAgICAgICBkMy50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KDI1MClcbiAgICAgICAgLmR1cmF0aW9uKDM1MDApXG4gICAgICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgIGNvbnN0IHBvaW50ID0gWy0xMTIuNDA3LDI4LjEwODddO1xuICAgICAgICAgY29uc3Qgcm90YXRhdGlvbkdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wb2ludFswXSwgLXBvaW50WzFdXSk7XG4gICAgICAgICBjb25zdCBzY2FsZUdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5zY2FsZSgpLCA2MDAwMClcbiAgICAgICAgIFxuICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyb3RhdGF0aW9uR3JhZGllbnQodCkpO1xuICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbiAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH0pXG59ICAgICBcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHbG9iZSgpe1xuICAgIGRyYXdHbG9iZSgpXG4gICAgZW5hYmxlUm90YXRpb24oKVxufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7cmVuZGVyRGVwdGh9IGZyb20gXCIuL2RlcHRoXCJcblxuXG4gY29uc3QgbWFrZU1hcCA9IChzcGVlZCxzY2FsZSxkYXRhKSA9PntcbiAgICBjb25zb2xlLmxvZyhcImJ1aWx0XCIpXG5cbiAgICBcbiAgICBkMy5zZWxlY3QoXCIjc3BlZWQtZG93blwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG93blwiKVxuICAgICAgICBzcGVlZCA9IDEwMDAwMDAwXG4gICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0gIFxuXG4gICAgY29uc3Qgem9vbSA9IGQzLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgNjAwMDAwXSlcbiAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgc3ZnLmNhbGwoem9vbSk7ICAgICAgXG5cbiAgICBkMy5xdWV1ZSgpXG4gICAgLmRlZmVyKGQzLmpzb24sIFwiLi9uZV8xMTBtX29jZWFuLmpzb25cIilcbiAgICAuYXdhaXQocmVhZHkpXG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAgICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAgIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuICAgICAgICBcbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBmdW5jdGlvbiByZWFkeSAoZXJyb3IsZGF0YSl7XG4gICAgICBjb25zdCBvY2VhbiA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzXG5cbiAgICAgIGNvbnNvbGUubG9nKG9jZWFuKVxuXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiLm9jZWFuXCIpXG4gICAgICAgICAgLmRhdGEob2NlYW4pXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJvY2VhblwiKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiIzA3MEM1OFwiKVxuXG5cbiAgICAgIGQzLmNzdignLi90ZXN0LmNzdicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBkLmRlcHRoID0gK2QuaGRvcDtcbiAgICAgICAgICBkLnRpbWVzdGFtcDEgPSBuZXcgRGF0ZShkLnRpbWVzdGFtcCk7XG4gICAgICAgICAgZC5sb2NhdGlvbkxvbmcgPSArZC5sb2NhdGlvbkxvbmcgXG4gICAgICAgICAgZC5sb2NhdGlvbkxhdCA9ICtkLmxvY2F0aW9uTGF0XG4gICAgICAgICAgXG5cbiAgICAgIGQzLnNlbGVjdChcIiNzdGFydFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICBjb25zdCBsaW5lUGF0aCA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzBdfSlcbiAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVsxXX0pXG4gICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcblxuICAgICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGxpbmVQYXRoLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICBsaW5lUGF0aFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAudHJhbnNpdGlvbigpIFxuICAgICAgLmR1cmF0aW9uKHNwZWVkKSBcbiAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuICAgICAgcmVuZGVyRGVwdGgoZGF0YSwgc3BlZWQpXG4gICAgICB9KVxuXG4gICAgICBkMy5zZWxlY3QoXCIjcmVzZXRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgICAgfSlcbiAgICAgICAgXG4gIGQzLnNlbGVjdChcIiNzcGVlZC11cFwiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuICAvLyBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAvLyAuc2NhbGUoc2NhbGUpXG4gIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIikgXG5cbiAgICAgICAgY29uc3QgeCA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVswXTtcbiAgICAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbiAgICAgICAgbGV0IG5ld1NjYWxlID0gNjAwMDAwXG5cbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTAwKS5jYWxsKFxuICAgICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBkMy56b29tSWRlbnRpdHkuc2NhbGUobmV3U2NhbGUpLnRyYW5zbGF0ZSgteCwgLXkpKTtcblxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuXG5cbi8vICBkMy5zZWxlY3QoXCIjc3BlZWQtdXBcIikub24oXCJjbGlja1wiLCAoKT0+e1xuXG4vLyAgICAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuLy8gICAgIC8vIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4vLyAgICAgLy8gLnNjYWxlKHNjYWxlKVxuLy8gICAgIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG5cblxuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja1wiKVxuXG4vLyAgICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgXG4vLyAgICAgLy8gZnVuY3Rpb24gem9vbWVkKCkge1xuLy8gICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuLy8gICAgIC8vIH0gIFxuXG4gICAgXG4vLyAgICAgICBjb25zdCB6b29tID0gZDMuem9vbSgpXG4vLyAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDYwMDAwMF0pXG4vLyAgICAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4vLyAgICAgICBzdmcuY2FsbCh6b29tKTsgICAgICBcblxuLy8gICAgIGNvbnN0IHggPSBwcm9qZWN0aW9uKFstMTEyLjQwNywyOC4xMDg3XSlbMF07XG4vLyAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbi8vICAgICBsZXQgbmV3U2NhbGUgPSA2MDAwMDBcblxuLy8gICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjUwMCkuY2FsbChcbi8vICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4vLyAgICAgICAgIGQzLnpvb21JZGVudGl0eS5zY2FsZShuZXdTY2FsZSkudHJhbnNsYXRlKC14LCAteSkpO1xuXG4vLyAgIGNvbnNvbGUubG9nKFwiY2xpY2syXCIpXG4gIFxuLy8gICAgICAgICAvLyBkMy5zZWxlY3RBbGwoJyN3b3JsZC1tYXAgPiBwYXRoJylcbi8vICAgICAgICAgLy8gLnJlbW92ZSgpO1xuXG4vLyAgICAgICAgIC8vIG1ha2VNYXAoc3BlZWQsNjAwMDApXG4vLyB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXBcbiAgICAiLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3BsYXNoVWkoKSB7XG4gICAgY29uc3Qgc3BsYXNoVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtcGFnZVwiKVswXVxuICAgIHNwbGFzaFVpLnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhY2tpbmdVaSgpIHtcbiAgICBjb25zdCB0cmFja1VpID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYWNraW5nLXBhZ2VcIilbMF1cbiAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB6b29tKCkge1xuLy8gICAgIGNvbnN0IHRhcmdldCA9IFstMTEyLjQwNywyOC4xMDg3XTtcblxuLy8gICAgIGZ1bmN0aW9uIHpvb21Ubyhsb2NhdGlvbiwgc2NhbGUpIHtcbi8vICAgICAgICAgdmFyIHBvaW50ID0gcHJvamVjdGlvbihsb2NhdGlvbik7XG4vLyAgICAgICAgIHJldHVybiB6b29tXG4vLyAgICAgICAgICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiAtIHBvaW50WzBdICogc2NhbGUsIGhlaWdodCAvIDIgLSBwb2ludFsxXSAqIHNjYWxlXSlcbi8vICAgICAgICAgICAgLnNjYWxlKHNjYWxlKTtcbi8vICAgICB9XG4gICAgXG5cbi8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9