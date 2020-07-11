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
/* harmony import */ var _depth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./depth */ "./src/scripts/depth.js");


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
  console.log(projection);
}
function enableRotation() {
  var svg = d3.select('#world-map');
  var a = d3.timer(function (elapsed) {
    projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
    svg.selectAll("path").attr("d", path);
  });
  d3.select("#track").on("click", function () {
    console.log("stop");
    a.stop();
    _transition_js__WEBPACK_IMPORTED_MODULE_0__["executeTransition"](ocean, projection, path);
  });
  d3.csv('./test.csv', function (data) {
    data.forEach(function (d) {
      d.depth = +d.hdop;
      d.timestamp1 = new Date(d.timestamp);
      d.locationLong = +d.locationLong;
      d.locationLat = +d.locationLat;
      d3.select("#start").on("click", function () {
        console.log("click");
        var linePath = svg.append("path").datum(data).attr("fill", "none").attr("stroke", "white").attr("class", "line").attr("stroke-width", 3).attr("d", d3.line().x(function (d) {
          return projection([d.locationLong, d.locationLat])[0];
        }).y(function (d) {
          return projection([d.locationLong, d.locationLat])[1];
        }).curve(d3.curveCardinal));
        var totalLength = linePath.node().getTotalLength();
        linePath.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(12000).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
        Object(_depth__WEBPACK_IMPORTED_MODULE_1__["renderDepth"])(data, 12000);
      });
      d3.select("#reset").on("click", function () {
        d3.selectAll(".line").remove();
      });
      d3.select("#zoomOut").on("click", function () {
        _transition_js__WEBPACK_IMPORTED_MODULE_0__["reverseTransition"](ocean, projection, path);
        a = d3.timer(function (elapsed) {
          projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
          svg.selectAll("path").attr("d", path);
          d3.selectAll(".line").remove();
        });
      });
      d3.select("#viewDepth").on("click", function () {
        _transition_js__WEBPACK_IMPORTED_MODULE_0__["toggleDepth"]();
      });
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
/*! exports provided: toggleSplashUi, toggleTrackingUi, toggleDepth, zoom, zoomOut, executeTransition, reverseTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSplashUi", function() { return toggleSplashUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTrackingUi", function() { return toggleTrackingUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDepth", function() { return toggleDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return zoomOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeTransition", function() { return executeTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseTransition", function() { return reverseTransition; });
function toggleSplashUi() {
  var splashUi = document.getElementsByClassName("start-page")[0];

  if (splashUi.getAttribute("h") === "true") {
    splashUi.setAttribute("h", false);
  } else {
    splashUi.setAttribute("h", true);
  }
}
function toggleTrackingUi() {
  var trackUi = document.getElementsByClassName("tracking-page")[0];

  if (trackUi.getAttribute("h") === "true") {
    trackUi.setAttribute("h", false);
  } else {
    trackUi.setAttribute("h", true);
  }
}
function toggleDepth() {
  console.log("click");
  var depth = document.getElementsByClassName("depth-parent")[0];

  if (depth.getAttribute("h") === "true") {
    depth.setAttribute("h", false);
  } else {
    depth.setAttribute("h", true);
  }
} // export function zoom(ocean,projection,path) {
//     d3.transition()
//     // .delay(250)
//     .duration(3500)
//     .tween("rotate", function() {
//      const point = [-112.407,28.1087];
//      const rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
//      return function(t) {
//          projection.rotate(rotatationGradient(t));
//         ocean.attr("d", path);
//       };
//     })
// d3.transition()
// .delay(2500)
// .duration(1000)
//     .tween("zoom",function(){
//         const point = [-112.407,28.1087];
//         const rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
//         const scaleGradient = d3.interpolate(projection.scale(), 60000)
//         return function(t) {
//             projection.rotate(rotatationGradient(t));
//             projection.scale(scaleGradient(t))
//             ocean.attr("d", path);
//         };
//     })
// }

function zoom(ocean, projection, path) {
  var twizzleLock = {};
  var plonkLock = {};
  ocean.call(rotate, 3500, path).call(zoomIn, 4000, path);

  function rotate(space, duration, path) {
    d3.select(twizzleLock).transition().duration(duration).tween("rotate", function () {
      var point = [-112.107, 27.9087];
      var rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
      return function (t) {
        projection.rotate(rotatationGradient(t));
        ocean.attr("d", path);
      };
    });
  }

  function zoomIn(space, duration, path) {
    d3.select(plonkLock).transition().ease(d3.easeExpIn).duration(duration).tween("zoom", function () {
      var scaleGradient = d3.interpolate(projection.scale(), 60000);
      return function (t) {
        projection.scale(scaleGradient(t));
        ocean.attr("d", path);
      };
    });
  }
}
function zoomOut(ocean, projection, path) {
  console.log("click");
  d3.transition().duration(1000).tween("zoom", function () {
    var scaleGradient = d3.interpolate(projection.scale(), 400);
    return function (t) {
      projection.scale(scaleGradient(t));
      ocean.attr("d", path);
    };
  });
} // export function(test)

function executeTransition(ocean, projection, path) {
  toggleSplashUi();
  zoom(ocean, projection, path);
  toggleTrackingUi();
}
function reverseTransition(ocean, projection, path) {
  toggleTrackingUi();
  zoomOut(ocean, projection, path);
  toggleSplashUi();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RlcHRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ha2VHbG9iZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWtlTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJzcGVlZCIsInNjYWxlIiwiY29uZmlnIiwidmVydGljYWxUaWx0IiwiaG9yaXpvbnRhbFRpbHQiLCJkMyIsInNlbGVjdCIsImF0dHIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlR2xvYmUiLCJyZW5kZXJEZXB0aCIsImRhdGEiLCJzdmciLCJ4VmFsdWUiLCJkIiwidGltZXN0YW1wMSIsInhMYWJlbCIsInlWYWx1ZSIsImRlcHRoIiwieUxhYmVsIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZyIsImFwcGVuZCIsInhBeGlzRyIsInlBeGlzRyIsInRleHQiLCJzdHlsZSIsInhTY2FsZSIsInNjYWxlVGltZSIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwic3RhcnREYXRlIiwiZmluaXNoRGF0ZSIsImxlbmd0aCIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInRpY2tQYWRkaW5nIiwidGlja1NpemUiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidGlja3MiLCJuZXN0ZWQiLCJuZXN0Iiwia2V5Iiwid2hhbGVJZCIsImVudHJpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9tYWluIiwiZXh0ZW50IiwicmFuZ2UiLCJuaWNlIiwicGF0aCIsImRhdHVtIiwibGluZSIsIngiLCJ5IiwidG90YWxMZW5ndGgiLCJub2RlIiwiZ2V0VG90YWxMZW5ndGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZWFzZUxpbmVhciIsImNhbGwiLCJzbGljZSIsInByb2plY3Rpb24iLCJnZW9PcnRob2dyYXBoaWMiLCJpbml0aWFsU2NhbGUiLCJnZW9QYXRoIiwib2NlYW4iLCJkcmF3R2xvYmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJxdWV1ZSIsImRlZmVyIiwianNvbiIsImF3YWl0IiwiZXJyb3IiLCJsb2NhdGlvbkRhdGEiLCJzZWxlY3RBbGwiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwibmVfMTEwbV9vY2VhbiIsImZlYXR1cmVzIiwiZW50ZXIiLCJlbmFibGVSb3RhdGlvbiIsImEiLCJ0aW1lciIsImVsYXBzZWQiLCJvbiIsInN0b3AiLCJjc3YiLCJmb3JFYWNoIiwiaGRvcCIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJsb2NhdGlvbkxvbmciLCJsb2NhdGlvbkxhdCIsImxpbmVQYXRoIiwiY3VydmUiLCJjdXJ2ZUNhcmRpbmFsIiwicmVtb3ZlIiwibWFrZU1hcCIsInpvb21lZCIsImV2ZW50IiwidHJhbnNmb3JtIiwiem9vbSIsInNjYWxlRXh0ZW50IiwicmVhZHkiLCJnZW9NZXJjYXRvciIsImNlbnRlciIsIm5ld1NjYWxlIiwiem9vbUlkZW50aXR5IiwidG9nZ2xlU3BsYXNoVWkiLCJzcGxhc2hVaSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVUcmFja2luZ1VpIiwidHJhY2tVaSIsInRvZ2dsZURlcHRoIiwidHdpenpsZUxvY2siLCJwbG9ua0xvY2siLCJ6b29tSW4iLCJzcGFjZSIsInR3ZWVuIiwicG9pbnQiLCJyb3RhdGF0aW9uR3JhZGllbnQiLCJpbnRlcnBvbGF0ZSIsInQiLCJlYXNlRXhwSW4iLCJzY2FsZUdyYWRpZW50Iiwiem9vbU91dCIsImV4ZWN1dGVUcmFuc2l0aW9uIiwicmV2ZXJzZVRy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RSxLQUZMLENBRVcsTUFGWCxFQUVrQixZQUFVO0FBQ3BCLFFBQU1NLGFBQWEsR0FBR3ZJLEVBQUUsQ0FBQ29JLFdBQUgsQ0FBZWhFLFVBQVUsQ0FBQ3hFLEtBQVgsRUFBZixFQUFtQyxHQUFuQyxDQUF0QjtBQUNBLFdBQU8sVUFBU3lJLENBQVQsRUFBWTtBQUNmakUsZ0JBQVUsQ0FBQ3hFLEtBQVgsQ0FBaUIySSxhQUFhLENBQUNGLENBQUQsQ0FBOUI7QUFDQTdELFdBQUssQ0FBQ3RFLElBQU4sQ0FBVyxHQUFYLEVBQWdCb0QsSUFBaEI7QUFDSCxLQUhEO0FBSUgsR0FSTDtBQVdQLEMsQ0FFRDs7QUFNTyxTQUFTbUYsaUJBQVQsQ0FBMkJqRSxLQUEzQixFQUFpQ0osVUFBakMsRUFBNENkLElBQTVDLEVBQWlEO0FBQ3BEK0QsZ0JBQWM7QUFDZFAsTUFBSSxDQUFDdEMsS0FBRCxFQUFPSixVQUFQLEVBQWtCZCxJQUFsQixDQUFKO0FBQ0FvRSxrQkFBZ0I7QUFDbkI7QUFFTSxTQUFTZ0IsaUJBQVQsQ0FBMkJsRSxLQUEzQixFQUFpQ0osVUFBakMsRUFBNENkLElBQTVDLEVBQWlEO0FBQ3BEb0Usa0JBQWdCO0FBQ2hCYyxTQUFPLENBQUNoRSxLQUFELEVBQU9KLFVBQVAsRUFBa0JkLElBQWxCLENBQVA7QUFDQStELGdCQUFjO0FBQ2pCLEM7Ozs7Ozs7Ozs7O0FDcEpELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IG1ha2VNYXAgZnJvbSBcIi4vc2NyaXB0cy9tYWtlTWFwXCJcbmltcG9ydCB7ZHJhd0dsb2JlLCBlbmFibGVSb3RhdGlvbiwgbWFrZUdsb2JlfSBmcm9tIFwiLi9zY3JpcHRzL21ha2VHbG9iZVwiXG5cbmNvbnN0IHdpZHRoID0gNTAwO1xuY29uc3QgaGVpZ2h0ID0gNTAwXG5cbmxldCBzcGVlZD0gMTAwMDAwXG5sZXQgc2NhbGUgPSA1MDAgLy9jYW50IGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgdHJhbnNmb3JtIHRvIHdvcmtcbi8vIGxldCBzY2FsZSA9IDYwMDAwO1xuY29uc3QgY29uZmlnID0ge1xuICAgIHNwZWVkOiAwLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxuICB9XG4gXG5cbmQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG4gICAgLmF0dHIoXCJ3aWR0aFwiICxcIjEwMHZ3XCIpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDB2aFwiKVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG5cblxuZDMuc2VsZWN0KCcjZGVwdGgtZ3JhcGgnKVxuICAgIC5hdHRyKFwid2lkdGhcIiAsd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG4gICAgXG4vLyBkMy5zZWxlY3QoJyNsb2NhdGlvbi1ncmFwaCcpXG4vLyAgICAgLmF0dHIoXCJ3aWR0aFwiICx3aWR0aClcbi8vICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4vLyAgICAgLmF0dHIoXCJzdHlsZVwiLCBcIm91dGxpbmU6IHRoaW4gc29saWQgYmxhY2tcIilcblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5tYWtlR2xvYmUoKTtcblxufSkiLCJcblxuZXhwb3J0IGNvbnN0IHJlbmRlckRlcHRoID0gKGRhdGEsc3BlZWQpID0+e1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RlcHRoLWdyYXBoJylcbiAgICBjb25zdCB4VmFsdWUgPSBkID0+IGQudGltZXN0YW1wMTtcbiAgICBjb25zdCB4TGFiZWwgPSBcIlRpbWVcIjtcbiAgICBjb25zdCB5VmFsdWUgPSBkID0+IGQuZGVwdGg7XG4gICAgY29uc3QgeUxhYmVsID0gXCJkZXB0aFwiO1xuICAgIC8vIGNvbnN0IG1hcmdpbiA9IHsgbGVmdDogMTIwLCByaWdodDogMzAsIHRvcDogMjAsIGJvdHRvbTogMTIwIH07XG4gICAgY29uc3QgbWFyZ2luID0geyBsZWZ0OiA0MCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH07XG5cblxuICAgIGNvbnN0IHdpZHRoID0gc3ZnLmF0dHIoJ3dpZHRoJylcbiAgICBjb25zdCBoZWlnaHQgPSBzdmcuYXR0cignaGVpZ2h0JylcbiAgICBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG4gICAgICBjb25zdCB4QXhpc0cgPSBnLmFwcGVuZCgnZycpXG4gICAgICAgICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtpbm5lckhlaWdodH0pYCk7XG4gICAgICBjb25zdCB5QXhpc0cgPSBnLmFwcGVuZCgnZycpO1xuXG4gICAgICB4QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcy1sYWJlbCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCBpbm5lcldpZHRoIC8gMilcbiAgICAgICAgICAuYXR0cigneScsIDEwMClcbiAgICAgICAgICAudGV4dCh4TGFiZWwpO1xuXG4gICAgICB5QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcy1sYWJlbCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAtaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgICAgIC5hdHRyKCd5JywgLTQwKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgcm90YXRlKC05MClgKVxuICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAudGV4dCh5TGFiZWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBzdGFydERhdGUgPSBkYXRhWzBdLnRpbWVzdGFtcDE7XG4gICAgICAgICAgY29uc3QgZmluaXNoRGF0ZSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS50aW1lc3RhbXAxOyBcblxuXG4gICAgICAgICAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSlcbiAgICAgICAgICAgIC50aWNrUGFkZGluZygyMClcbiAgICAgICAgICAgIC8vIC50aWNrcyhkMy51dGNNaW51dGUuZXZlcnkoNjApKVxuICAgICAgICAgICAgLy8gICAudGlja1ZhbHVlcyhkMy50aW1lTWludXRlcyhzdGFydERhdGUsIGZpbmlzaERhdGUsNSkpXG4gICAgICAgICAgICAudGlja1NpemUoLWlubmVySGVpZ2h0KTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgIC50aWNrcyg1KVxuICAgICAgICAgIC50aWNrUGFkZGluZygxNSlcbiAgICAgICAgICAudGlja1NpemUoLWlubmVyV2lkdGgpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbmVzdGVkID0gZDMubmVzdCgpXG4gICAgICAgICAgLmtleSggZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHJldHVybiBkLndoYWxlSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5lbnRyaWVzKGRhdGEpXG4gICAgICAgIDtcbiAgICAgICAgY29uc29sZS5sb2cobmVzdGVkKVxuICAgICAgICBcbiAgICAgICAgeFNjYWxlXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIHhWYWx1ZSkpXG4gICAgICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pXG4gICAgICAgIC5uaWNlKCk7XG4gICAgICAgIFxuICAgICAgICB5U2NhbGVcbiAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgeVZhbHVlKSlcbiAgICAgICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pXG4gICAgICAgIC5uaWNlKCk7XG5cbiAgIGNvbnN0IHBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYClcbiAgICAuZGF0dW0oZGF0YSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKHhWYWx1ZShkKSkgfSlcbiAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZSh5VmFsdWUoZCkpIH0pXG4gICAgICApXG5cbiAgICAgIHZhciB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgIHBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgIC5kdXJhdGlvbihzcGVlZCkgXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cblxuICAgIC8vICBnLnNlbGVjdEFsbCgnY2lyY2xlJykuZGF0YShkYXRhKVxuICAgIC8vICAgIC5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcbiAgICAvLyAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiAgeFNjYWxlKHhWYWx1ZShkKSkpXG4gICAgLy8gICAgICAuYXR0cignY3knLCBkID0+IHlTY2FsZSh5VmFsdWUoZCkpKVxuICAgIC8vICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDAuNilcbiAgICAvLyAgICAgIC5hdHRyKCdyJywgOCk7XG5cbiAgICAgeEF4aXNHLmNhbGwoeEF4aXMpO1xuICAgICB5QXhpc0cuY2FsbCh5QXhpcyk7XG4gICAgICB9OyIsImltcG9ydCAqIGFzIHRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiXG5pbXBvcnQge3JlbmRlckRlcHRofSBmcm9tIFwiLi9kZXB0aFwiXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG5jb25zb2xlLmxvZygrc3ZnLnN0eWxlKFwid2lkdGhcIikuc2xpY2UoMCwtMikpXG5cbmxldCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKClcblxuY29uc3QgaW5pdGlhbFNjYWxlID0gcHJvamVjdGlvbi5zY2FsZSg0MDApO1xuXG5jb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBzcGVlZDogLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxufVxuXG5sZXQgb2NlYW5cblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3R2xvYmUoc3BlZWQgPSAxMDAwMDApIHsgIFxuICAgIGNvbnN0IHdpZHRoID0gK3N2Zy5zdHlsZShcIndpZHRoXCIpLnNsaWNlKDAsLTIpXG4gICAgY29uc3QgaGVpZ2h0ID0gK3N2Zy5zdHlsZShcImhlaWdodFwiKS5zbGljZSgwLC0yKVxuICAgIFxuICAgIHByb2plY3Rpb25cbiAgICAgICAgLnRyYW5zbGF0ZShbd2lkdGggLzIsIGhlaWdodCAvMl0pXG4gICAgICAgIC5yb3RhdGUoWzgyLjQwN10pXG5cbiAgICAvLyBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZC1iYWNrZ3JvdW5kXCIpXG5cbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgLy8gICAgIC50cmFuc2xhdGUoW3dpZHRoIC8yLCBoZWlnaHQgLzJdKVxuXG4gICAgZDMucXVldWUoKVxuICAgICAgICAuZGVmZXIoZDMuanNvbiwgJy4vbmVfMTEwbV9vY2Vhbi5qc29uJykgICAgICAgICAgXG4gICAgICAgIC5hd2FpdCgoZXJyb3IsIGRhdGEsIGxvY2F0aW9uRGF0YSkgPT4ge1xuICAgICAgICAgICBvY2VhbiA9IGcuc2VsZWN0QWxsKFwiLnNlZ21lbnRcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKGRhdGEsIGRhdGEub2JqZWN0cy5uZV8xMTBtX29jZWFuKS5mZWF0dXJlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlZ21lbnRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsICgpID0+ICcjMDcwQzU4JylcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3Rpb24pXG4gICAgfSAgIFxuXG5cbiAgICAgICAgXG4gICAgICAgICAgICBcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVJvdGF0aW9uKCkge1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG5cblxuICBsZXQgYSA9IGQzLnRpbWVyKGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICAgIHByb2plY3Rpb24ucm90YXRlKFtjb25maWcuc3BlZWQgKiBlbGFwc2VkIC0gMTIwLCBjb25maWcudmVydGljYWxUaWx0LCBjb25maWcuaG9yaXpvbnRhbFRpbHRdKTtcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInBhdGhcIikuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgfSk7XG5cbiAgICBkMy5zZWxlY3QoXCIjdHJhY2tcIikub24oXCJjbGlja1wiLCAoKT0+e1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKVxuICAgICAgICBhLnN0b3AoKVxuICAgICAgICB0cmFuc2l0aW9uLmV4ZWN1dGVUcmFuc2l0aW9uKG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICB9KVxuXG4gICAgXG4gICAgZDMuY3N2KCcuL3Rlc3QuY3N2JywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgZC5kZXB0aCA9ICtkLmhkb3A7XG4gICAgICAgIGQudGltZXN0YW1wMSA9IG5ldyBEYXRlKGQudGltZXN0YW1wKTtcbiAgICAgICAgZC5sb2NhdGlvbkxvbmcgPSArZC5sb2NhdGlvbkxvbmcgXG4gICAgICAgIGQubG9jYXRpb25MYXQgPSArZC5sb2NhdGlvbkxhdFxuICAgICAgICBcblxuICAgIGQzLnNlbGVjdChcIiNzdGFydFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIilcblxuXG4gICAgY29uc3QgbGluZVBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5kYXR1bShkYXRhKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4gcHJvamVjdGlvbihcbiAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzBdfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gcHJvamVjdGlvbihcbiAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzFdfSlcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcblxuICAgIHZhciB0b3RhbExlbmd0aCA9IGxpbmVQYXRoLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgbGluZVBhdGhcbiAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgdG90YWxMZW5ndGggKyBcIiBcIiArIHRvdGFsTGVuZ3RoKVxuICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgLnRyYW5zaXRpb24oKSBcbiAgICAuZHVyYXRpb24oMTIwMDApIFxuICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cbiAgICByZW5kZXJEZXB0aChkYXRhLCAxMjAwMClcblxuXG5cbiAgICAgICAgIH0pXG5cbiAgICAgICAgIGQzLnNlbGVjdChcIiNyZXNldFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiN6b29tT3V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIHRyYW5zaXRpb24ucmV2ZXJzZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgICAgICAgICAgYSA9IGQzLnRpbWVyKGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoW2NvbmZpZy5zcGVlZCAqIGVsYXBzZWQgLSAxMjAsIGNvbmZpZy52ZXJ0aWNhbFRpbHQsIGNvbmZpZy5ob3Jpem9udGFsVGlsdF0pO1xuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3ZpZXdEZXB0aFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICB0cmFuc2l0aW9uLnRvZ2dsZURlcHRoKClcbiAgICAgICAgfSlcbiAgICB9KVxufSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHbG9iZSgpe1xuICAgIGRyYXdHbG9iZSgpXG4gICAgZW5hYmxlUm90YXRpb24oKVxufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7cmVuZGVyRGVwdGh9IGZyb20gXCIuL2RlcHRoXCJcblxuXG4gY29uc3QgbWFrZU1hcCA9IChzcGVlZCxzY2FsZSxkYXRhKSA9PntcbiAgICBjb25zb2xlLmxvZyhcImJ1aWx0XCIpXG5cbiAgICBcbiAgICBkMy5zZWxlY3QoXCIjc3BlZWQtZG93blwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG93blwiKVxuICAgICAgICBzcGVlZCA9IDEwMDAwMDAwXG4gICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0gIFxuXG4gICAgY29uc3Qgem9vbSA9IGQzLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgNjAwMDAwXSlcbiAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgc3ZnLmNhbGwoem9vbSk7ICAgICAgXG5cbiAgICBkMy5xdWV1ZSgpXG4gICAgLmRlZmVyKGQzLmpzb24sIFwiLi9uZV8xMTBtX29jZWFuLmpzb25cIilcbiAgICAuYXdhaXQocmVhZHkpXG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAgICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAgIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuICAgICAgICBcbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBmdW5jdGlvbiByZWFkeSAoZXJyb3IsZGF0YSl7XG4gICAgICBjb25zdCBvY2VhbiA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzXG5cbiAgICAgIGNvbnNvbGUubG9nKG9jZWFuKVxuXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiLm9jZWFuXCIpXG4gICAgICAgICAgLmRhdGEob2NlYW4pXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJvY2VhblwiKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiIzA3MEM1OFwiKVxuXG5cbiAgICAgIGQzLmNzdignLi90ZXN0LmNzdicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBkLmRlcHRoID0gK2QuaGRvcDtcbiAgICAgICAgICBkLnRpbWVzdGFtcDEgPSBuZXcgRGF0ZShkLnRpbWVzdGFtcCk7XG4gICAgICAgICAgZC5sb2NhdGlvbkxvbmcgPSArZC5sb2NhdGlvbkxvbmcgXG4gICAgICAgICAgZC5sb2NhdGlvbkxhdCA9ICtkLmxvY2F0aW9uTGF0XG4gICAgICAgICAgXG5cbiAgICAgIGQzLnNlbGVjdChcIiNzdGFydFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICBjb25zdCBsaW5lUGF0aCA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzBdfSlcbiAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVsxXX0pXG4gICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcblxuICAgICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGxpbmVQYXRoLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICBsaW5lUGF0aFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAudHJhbnNpdGlvbigpIFxuICAgICAgLmR1cmF0aW9uKHNwZWVkKSBcbiAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuICAgICAgcmVuZGVyRGVwdGgoZGF0YSwgc3BlZWQpXG4gICAgICB9KVxuXG4gICAgICBkMy5zZWxlY3QoXCIjcmVzZXRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgICAgfSlcbiAgICAgICAgXG4gIGQzLnNlbGVjdChcIiNzcGVlZC11cFwiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuICAvLyBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAvLyAuc2NhbGUoc2NhbGUpXG4gIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIikgXG5cbiAgICAgICAgY29uc3QgeCA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVswXTtcbiAgICAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbiAgICAgICAgbGV0IG5ld1NjYWxlID0gNjAwMDAwXG5cbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTAwKS5jYWxsKFxuICAgICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBkMy56b29tSWRlbnRpdHkuc2NhbGUobmV3U2NhbGUpLnRyYW5zbGF0ZSgteCwgLXkpKTtcblxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuXG5cbi8vICBkMy5zZWxlY3QoXCIjc3BlZWQtdXBcIikub24oXCJjbGlja1wiLCAoKT0+e1xuXG4vLyAgICAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuLy8gICAgIC8vIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4vLyAgICAgLy8gLnNjYWxlKHNjYWxlKVxuLy8gICAgIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG5cblxuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja1wiKVxuXG4vLyAgICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgXG4vLyAgICAgLy8gZnVuY3Rpb24gem9vbWVkKCkge1xuLy8gICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuLy8gICAgIC8vIH0gIFxuXG4gICAgXG4vLyAgICAgICBjb25zdCB6b29tID0gZDMuem9vbSgpXG4vLyAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDYwMDAwMF0pXG4vLyAgICAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4vLyAgICAgICBzdmcuY2FsbCh6b29tKTsgICAgICBcblxuLy8gICAgIGNvbnN0IHggPSBwcm9qZWN0aW9uKFstMTEyLjQwNywyOC4xMDg3XSlbMF07XG4vLyAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbi8vICAgICBsZXQgbmV3U2NhbGUgPSA2MDAwMDBcblxuLy8gICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjUwMCkuY2FsbChcbi8vICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4vLyAgICAgICAgIGQzLnpvb21JZGVudGl0eS5zY2FsZShuZXdTY2FsZSkudHJhbnNsYXRlKC14LCAteSkpO1xuXG4vLyAgIGNvbnNvbGUubG9nKFwiY2xpY2syXCIpXG4gIFxuLy8gICAgICAgICAvLyBkMy5zZWxlY3RBbGwoJyN3b3JsZC1tYXAgPiBwYXRoJylcbi8vICAgICAgICAgLy8gLnJlbW92ZSgpO1xuXG4vLyAgICAgICAgIC8vIG1ha2VNYXAoc3BlZWQsNjAwMDApXG4vLyB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXBcbiAgICAiLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BsYXNoVWkoKSB7XG4gICAgY29uc3Qgc3BsYXNoVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtcGFnZVwiKVswXVxuXG4gICAgaWYgKHNwbGFzaFVpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgc3BsYXNoVWkuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICBzcGxhc2hVaS5zZXRBdHRyaWJ1dGUoXCJoXCIgLHRydWUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJhY2tpbmdVaSgpIHtcbiAgICBjb25zdCB0cmFja1VpID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYWNraW5nLXBhZ2VcIilbMF1cblxuICAgIGlmICh0cmFja1VpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcblxuICAgICAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFxuICAgICAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURlcHRoKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIilcbiAgICBjb25zdCBkZXB0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZXB0aC1wYXJlbnRcIilbMF1cblxuICAgIGlmIChkZXB0aC5nZXRBdHRyaWJ1dGUoXCJoXCIpID09PSBcInRydWVcIil7XG5cbiAgICAgICAgZGVwdGguc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGRlcHRoLnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcbiAgICB9XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aCkge1xuXG4vLyAgICAgZDMudHJhbnNpdGlvbigpXG4vLyAgICAgLy8gLmRlbGF5KDI1MClcbi8vICAgICAuZHVyYXRpb24oMzUwMClcbi8vICAgICAudHdlZW4oXCJyb3RhdGVcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgIGNvbnN0IHBvaW50ID0gWy0xMTIuNDA3LDI4LjEwODddO1xuLy8gICAgICBjb25zdCByb3RhdGF0aW9uR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXBvaW50WzBdLCAtcG9pbnRbMV1dKTtcbiAgICAgXG4vLyAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4vLyAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyb3RhdGF0aW9uR3JhZGllbnQodCkpO1xuLy8gICAgICAgICBvY2Vhbi5hdHRyKFwiZFwiLCBwYXRoKTtcbi8vICAgICAgIH07XG4vLyAgICAgfSlcblxuXG4vLyBkMy50cmFuc2l0aW9uKClcbi8vIC5kZWxheSgyNTAwKVxuLy8gLmR1cmF0aW9uKDEwMDApXG4vLyAgICAgLnR3ZWVuKFwiem9vbVwiLGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGNvbnN0IHBvaW50ID0gWy0xMTIuNDA3LDI4LjEwODddO1xuLy8gICAgICAgICBjb25zdCByb3RhdGF0aW9uR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXBvaW50WzBdLCAtcG9pbnRbMV1dKTtcbi8vICAgICAgICAgY29uc3Qgc2NhbGVHcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24uc2NhbGUoKSwgNjAwMDApXG4vLyAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4vLyAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyb3RhdGF0aW9uR3JhZGllbnQodCkpO1xuLy8gICAgICAgICAgICAgcHJvamVjdGlvbi5zY2FsZShzY2FsZUdyYWRpZW50KHQpKVxuLy8gICAgICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgfSlcblxuXG5cbi8vIH1cblxuXG5leHBvcnQgZnVuY3Rpb24gem9vbShvY2Vhbixwcm9qZWN0aW9uLHBhdGgpIHtcblxuICAgIGNvbnN0IHR3aXp6bGVMb2NrID0ge307XG4gICAgY29uc3QgcGxvbmtMb2NrID0ge307XG5cbiAgICBvY2VhblxuICAgICAgICAuY2FsbChyb3RhdGUsMzUwMCxwYXRoKVxuICAgICAgICAuY2FsbCh6b29tSW4sIDQwMDAscGF0aClcblxuXG4gICAgZnVuY3Rpb24gcm90YXRlKHNwYWNlLCBkdXJhdGlvbixwYXRoKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0d2l6emxlTG9jaykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgICAudHdlZW4oXCJyb3RhdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi4xMDcsMjcuOTA4N107XG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRhdGlvbkdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wb2ludFswXSwgLXBvaW50WzFdXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUocm90YXRhdGlvbkdyYWRpZW50KHQpKTtcbiAgICAgICAgICAgICAgICAgICBvY2Vhbi5hdHRyKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbUluKHNwYWNlLCBkdXJhdGlvbixwYXRoKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QocGxvbmtMb2NrKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwSW4pXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgIC50d2VlbihcInpvb21cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5zY2FsZSgpLCA2MDAwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICAgIFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB6b29tT3V0KG9jZWFuLHByb2plY3Rpb24scGF0aCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIilcbiAgXG4gICAgICAgIGQzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC50d2VlbihcInpvb21cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDQwMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKHNjYWxlR3JhZGllbnQodCkpXG4gICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbih0ZXN0KVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpe1xuICAgIHRvZ2dsZVNwbGFzaFVpKClcbiAgICB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICB0b2dnbGVUcmFja2luZ1VpKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VUcmFuc2l0aW9uKG9jZWFuLHByb2plY3Rpb24scGF0aCl7XG4gICAgdG9nZ2xlVHJhY2tpbmdVaSgpXG4gICAgem9vbU91dChvY2Vhbixwcm9qZWN0aW9uLHBhdGgpXG4gICAgdG9nZ2xlU3BsYXNoVWkoKVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=