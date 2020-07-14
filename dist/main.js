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

  var yValue = function yValue(d) {
    return d.depth;
  };

  var yLabel = "Depth-(Hdop)";
  var margin = {
    left: 60,
    right: 0,
    top: 10,
    bottom: 10
  };
  var width = svg.attr('width');
  var height = svg.attr('height');
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;
  var g = svg.append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));
  var yAxisG = g.append('g');
  yAxisG.append('text').attr('class', 'axis-label').attr('x', -innerHeight / 2).attr('y', -40).attr('transform', "rotate(-90)").style('text-anchor', 'middle').style("fill", "black").text(yLabel);
  var xScale = d3.scaleTime();
  var yScale = d3.scaleLinear();
  var startDate = data[0].timestamp1;
  var finishDate = data[data.length - 1].timestamp1;
  var yAxis = d3.axisLeft().scale(yScale).ticks(10).tickPadding(10).tickSize(-innerWidth);
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
  path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(speed).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
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
  console.log("toggle");
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
  setTimeout(toggleTrackingUi, 4000);
}
function reverseTransition(ocean, projection, path) {
  toggleTrackingUi();
  zoomOut(ocean, projection, path);
  setTimeout(toggleSplashUi, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RlcHRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ha2VHbG9iZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWtlTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJzY2FsZSIsImNvbmZpZyIsInZlcnRpY2FsVGlsdCIsImhvcml6b250YWxUaWx0IiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUdsb2JlIiwicmVuZGVyRGVwdGgiLCJkYXRhIiwic3ZnIiwieFZhbHVlIiwiZCIsInRpbWVzdGFtcDEiLCJ5VmFsdWUiLCJkZXB0aCIsInlMYWJlbCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImciLCJhcHBlbmQiLCJ5QXhpc0ciLCJzdHlsZSIsInRleHQiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInN0YXJ0RGF0ZSIsImZpbmlzaERhdGUiLCJsZW5ndGgiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidGlja3MiLCJ0aWNrUGFkZGluZyIsInRpY2tTaXplIiwibmVzdGVkIiwibmVzdCIsImtleSIsIndoYWxlSWQiLCJlbnRyaWVzIiwiY29uc29sZSIsImxvZyIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwibmljZSIsInBhdGgiLCJkYXR1bSIsImxpbmUiLCJ4IiwieSIsInRvdGFsTGVuZ3RoIiwibm9kZSIsImdldFRvdGFsTGVuZ3RoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJjYWxsIiwic2xpY2UiLCJwcm9qZWN0aW9uIiwiZ2VvT3J0aG9ncmFwaGljIiwiaW5pdGlhbFNjYWxlIiwiZ2VvUGF0aCIsIm9jZWFuIiwiZHJhd0dsb2JlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicXVldWUiLCJkZWZlciIsImpzb24iLCJhd2FpdCIsImVycm9yIiwibG9jYXRpb25EYXRhIiwic2VsZWN0QWxsIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsIm5lXzExMG1fb2NlYW4iLCJmZWF0dXJlcyIsImVudGVyIiwiZW5hYmxlUm90YXRpb24iLCJhIiwidGltZXIiLCJlbGFwc2VkIiwib24iLCJzdG9wIiwiY3N2IiwiZm9yRWFjaCIsImhkb3AiLCJEYXRlIiwidGltZXN0YW1wIiwibG9jYXRpb25Mb25nIiwibG9jYXRpb25MYXQiLCJsaW5lUGF0aCIsImN1cnZlIiwiY3VydmVDYXJkaW5hbCIsInJlbW92ZSIsIm1ha2VNYXAiLCJ6b29tZWQiLCJldmVudCIsInRyYW5zZm9ybSIsInpvb20iLCJzY2FsZUV4dGVudCIsInJlYWR5IiwiZ2VvTWVyY2F0b3IiLCJjZW50ZXIiLCJuZXdTY2FsZSIsInpvb21JZGVudGl0eSIsInRvZ2dsZVNwbGFzaFVpIiwic3BsYXNoVWkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlVHJhY2tpbmdVaSIsInRyYWNrVWkiLCJ0b2dnbGVEZXB0aCIsInR3aXp6bGVMb2NrIiwicGxvbmtMb2NrIiwiem9vbUluIiwic3BhY2UiLCJ0d2VlbiIsInBvaW50Iiwicm90YXRhdGlvbkdyYWRpZW50IiwiaW50ZXJwb2xhdGUiLCJ0IiwiZWFzZUV4cEluIiwic2NhbGVHcmFkaWVudCIsInpvb21PdXQiLCJleGVjdXRlVHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJyZXZlcnNlVHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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QUNIO0FBRU0sU0FBU2lCLGlCQUFULENBQTJCbkUsS0FBM0IsRUFBaUNKLFVBQWpDLEVBQTRDZCxJQUE1QyxFQUFpRDtBQUNwRG9FLGtCQUFnQjtBQUNoQmMsU0FBTyxDQUFDaEUsS0FBRCxFQUFPSixVQUFQLEVBQWtCZCxJQUFsQixDQUFQO0FBQ0FvRixZQUFVLENBQUNyQixjQUFELEVBQWlCLElBQWpCLENBQVY7QUFDSCxDOzs7Ozs7Ozs7OztBQ3JKRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBtYWtlTWFwIGZyb20gXCIuL3NjcmlwdHMvbWFrZU1hcFwiXG5pbXBvcnQge2RyYXdHbG9iZSwgZW5hYmxlUm90YXRpb24sIG1ha2VHbG9iZX0gZnJvbSBcIi4vc2NyaXB0cy9tYWtlR2xvYmVcIlxuXG5jb25zdCB3aWR0aCA9IDUwMDtcbmNvbnN0IGhlaWdodCA9IDUwMFxuXG5sZXQgc3BlZWQ9IDEwMDAwMFxubGV0IHNjYWxlID0gNTAwIC8vY2FudCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdGhlIHRyYW5zZm9ybSB0byB3b3JrXG4vLyBsZXQgc2NhbGUgPSA2MDAwMDtcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBzcGVlZDogMC4wMDUsXG4gICAgdmVydGljYWxUaWx0OiAtMTAsXG4gICAgaG9yaXpvbnRhbFRpbHQ6IDBcbiAgfVxuIFxuXG5kMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIC5hdHRyKFwid2lkdGhcIiAsXCIxMDB2d1wiKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwdmhcIilcbiAgICAuYXR0cihcInN0eWxlXCIsIFwib3V0bGluZTogdGhpbiBzb2xpZCBibGFja1wiKVxuXG5cbmQzLnNlbGVjdCgnI2RlcHRoLWdyYXBoJylcbiAgICAuYXR0cihcIndpZHRoXCIgLHdpZHRoKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAuYXR0cihcInN0eWxlXCIsIFwib3V0bGluZTogdGhpbiBzb2xpZCBibGFja1wiKVxuICAgIFxuLy8gZDMuc2VsZWN0KCcjbG9jYXRpb24tZ3JhcGgnKVxuLy8gICAgIC5hdHRyKFwid2lkdGhcIiAsd2lkdGgpXG4vLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuLy8gICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG5cblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xubWFrZUdsb2JlKCk7XG5cbn0pIiwiXG5cbmV4cG9ydCBjb25zdCByZW5kZXJEZXB0aCA9IChkYXRhLHNwZWVkKSA9PntcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNkZXB0aC1ncmFwaCcpXG4gICAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnRpbWVzdGFtcDE7XG4gICAgY29uc3QgeVZhbHVlID0gZCA9PiBkLmRlcHRoO1xuICAgIGNvbnN0IHlMYWJlbCA9IFwiRGVwdGgtKEhkb3ApXCI7XG4gICAgY29uc3QgbWFyZ2luID0geyBsZWZ0OjYwLCByaWdodDogMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9O1xuXG5cbiAgICBjb25zdCB3aWR0aCA9IHN2Zy5hdHRyKCd3aWR0aCcpXG4gICAgY29uc3QgaGVpZ2h0ID0gc3ZnLmF0dHIoJ2hlaWdodCcpXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICAgIGNvbnN0IHlBeGlzRyA9IGcuYXBwZW5kKCdnJyk7XG5cbiAgICAgIHlBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzLWxhYmVsJylcbiAgICAgICAgICAuYXR0cigneCcsIC1pbm5lckhlaWdodCAvIDIpXG4gICAgICAgICAgLmF0dHIoJ3knLCAtNDApXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwKWApXG4gICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC50ZXh0KHlMYWJlbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGRhdGFbMF0udGltZXN0YW1wMTtcbiAgICAgICAgICBjb25zdCBmaW5pc2hEYXRlID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnRpbWVzdGFtcDE7IFxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgICAgLnRpY2tzKDEwKVxuICAgICAgICAgIC50aWNrUGFkZGluZygxMClcbiAgICAgICAgICAudGlja1NpemUoLWlubmVyV2lkdGgpXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbmVzdGVkID0gZDMubmVzdCgpXG4gICAgICAgICAgLmtleSggZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHJldHVybiBkLndoYWxlSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5lbnRyaWVzKGRhdGEpXG4gICAgICAgIDtcbiAgICAgICAgY29uc29sZS5sb2cobmVzdGVkKVxuICAgICAgICBcbiAgICAgICAgeFNjYWxlXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIHhWYWx1ZSkpXG4gICAgICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pXG4gICAgICAgIC5uaWNlKCk7XG4gICAgICAgIFxuICAgICAgICB5U2NhbGVcbiAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgeVZhbHVlKSlcbiAgICAgICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pXG4gICAgICAgIC5uaWNlKCk7XG5cbiAgIGNvbnN0IHBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYClcbiAgICAuZGF0dW0oZGF0YSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKHhWYWx1ZShkKSkgfSlcbiAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZSh5VmFsdWUoZCkpIH0pXG4gICAgICApXG5cbiAgICAgIHZhciB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgIHBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgIC5kdXJhdGlvbihzcGVlZCkgXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cbiAgICAgeUF4aXNHLmNhbGwoeUF4aXMpO1xuICAgICAgfTsiLCJpbXBvcnQgKiBhcyB0cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIlxuaW1wb3J0IHtyZW5kZXJEZXB0aH0gZnJvbSBcIi4vZGVwdGhcIlxuXG5jb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuY29uc29sZS5sb2coK3N2Zy5zdHlsZShcIndpZHRoXCIpLnNsaWNlKDAsLTIpKVxuXG5sZXQgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpXG5cbmNvbnN0IGluaXRpYWxTY2FsZSA9IHByb2plY3Rpb24uc2NhbGUoNDAwKTtcblxuY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgc3BlZWQ6IC4wMDUsXG4gICAgdmVydGljYWxUaWx0OiAtMTAsXG4gICAgaG9yaXpvbnRhbFRpbHQ6IDBcbn1cblxubGV0IG9jZWFuXG5cbmNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dsb2JlKHNwZWVkID0gMTAwMDAwKSB7ICBcbiAgICBjb25zdCB3aWR0aCA9ICtzdmcuc3R5bGUoXCJ3aWR0aFwiKS5zbGljZSgwLC0yKVxuICAgIGNvbnN0IGhlaWdodCA9ICtzdmcuc3R5bGUoXCJoZWlnaHRcIikuc2xpY2UoMCwtMilcbiAgICBcbiAgICBwcm9qZWN0aW9uXG4gICAgICAgIC50cmFuc2xhdGUoW3dpZHRoIC8yLCBoZWlnaHQgLzJdKVxuICAgICAgICAucm90YXRlKFs4Mi40MDddKVxuXG4gICAgLy8gY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGQtYmFja2dyb3VuZFwiKVxuXG4gICAgLy8gYmFja2dyb3VuZFxuICAgIC8vICAgICAudHJhbnNsYXRlKFt3aWR0aCAvMiwgaGVpZ2h0IC8yXSlcblxuICAgIGQzLnF1ZXVlKClcbiAgICAgICAgLmRlZmVyKGQzLmpzb24sICcuL25lXzExMG1fb2NlYW4uanNvbicpICAgICAgICAgIFxuICAgICAgICAuYXdhaXQoKGVycm9yLCBkYXRhLCBsb2NhdGlvbkRhdGEpID0+IHtcbiAgICAgICAgICAgb2NlYW4gPSBnLnNlbGVjdEFsbChcIi5zZWdtZW50XCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMubmVfMTEwbV9vY2VhbikuZmVhdHVyZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZWdtZW50XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoKSA9PiAnIzA3MEM1OCcpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0aW9uKVxuICAgIH0gICBcblxuXG4gICAgICAgIFxuICAgICAgICAgICAgXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVSb3RhdGlvbigpIHtcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuXG5cbiAgbGV0IGEgPSBkMy50aW1lcihmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbY29uZmlnLnNwZWVkICogZWxhcHNlZCAtIDEyMCwgY29uZmlnLnZlcnRpY2FsVGlsdCwgY29uZmlnLmhvcml6b250YWxUaWx0XSk7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgIH0pO1xuXG4gICAgZDMuc2VsZWN0KFwiI3RyYWNrXCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcblxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BcIilcbiAgICAgICAgYS5zdG9wKClcbiAgICAgICAgdHJhbnNpdGlvbi5leGVjdXRlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpXG4gICAgfSlcblxuICAgIFxuICAgIGQzLmNzdignLi90ZXN0LmNzdicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgIGQuZGVwdGggPSArZC5oZG9wO1xuICAgICAgICBkLnRpbWVzdGFtcDEgPSBuZXcgRGF0ZShkLnRpbWVzdGFtcCk7XG4gICAgICAgIGQubG9jYXRpb25Mb25nID0gK2QubG9jYXRpb25Mb25nIFxuICAgICAgICBkLmxvY2F0aW9uTGF0ID0gK2QubG9jYXRpb25MYXRcbiAgICAgICAgXG5cbiAgICBkMy5zZWxlY3QoXCIjc3RhcnRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXG5cblxuICAgIGNvbnN0IGxpbmVQYXRoID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAuZGF0dW0oZGF0YSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZVwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVswXX0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVsxXX0pXG4gICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUNhcmRpbmFsKSk7XG5cbiAgICB2YXIgdG90YWxMZW5ndGggPSBsaW5lUGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIGxpbmVQYXRoXG4gICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgIC50cmFuc2l0aW9uKCkgXG4gICAgLmR1cmF0aW9uKDEyMDAwKSBcbiAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDApO1xuXG5cbiAgICByZW5kZXJEZXB0aChkYXRhLCAxMjAwMClcblxuXG5cbiAgICAgICAgIH0pXG5cbiAgICAgICAgIGQzLnNlbGVjdChcIiNyZXNldFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiN6b29tT3V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIHRyYW5zaXRpb24ucmV2ZXJzZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgICAgICAgICAgYSA9IGQzLnRpbWVyKGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoW2NvbmZpZy5zcGVlZCAqIGVsYXBzZWQgLSAxMjAsIGNvbmZpZy52ZXJ0aWNhbFRpbHQsIGNvbmZpZy5ob3Jpem9udGFsVGlsdF0pO1xuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3ZpZXdEZXB0aFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICB0cmFuc2l0aW9uLnRvZ2dsZURlcHRoKClcbiAgICAgICAgfSlcbiAgICB9KVxufSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHbG9iZSgpe1xuICAgIGRyYXdHbG9iZSgpXG4gICAgZW5hYmxlUm90YXRpb24oKVxufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7cmVuZGVyRGVwdGh9IGZyb20gXCIuL2RlcHRoXCJcblxuXG4gY29uc3QgbWFrZU1hcCA9IChzcGVlZCxzY2FsZSxkYXRhKSA9PntcbiAgICBjb25zb2xlLmxvZyhcImJ1aWx0XCIpXG5cbiAgICBcbiAgICBkMy5zZWxlY3QoXCIjc3BlZWQtZG93blwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG93blwiKVxuICAgICAgICBzcGVlZCA9IDEwMDAwMDAwXG4gICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0gIFxuXG4gICAgY29uc3Qgem9vbSA9IGQzLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgNjAwMDAwXSlcbiAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgc3ZnLmNhbGwoem9vbSk7ICAgICAgXG5cbiAgICBkMy5xdWV1ZSgpXG4gICAgLmRlZmVyKGQzLmpzb24sIFwiLi9uZV8xMTBtX29jZWFuLmpzb25cIilcbiAgICAuYXdhaXQocmVhZHkpXG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAgICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAgIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuICAgICAgICBcbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBmdW5jdGlvbiByZWFkeSAoZXJyb3IsZGF0YSl7XG4gICAgICBjb25zdCBvY2VhbiA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzXG5cbiAgICAgIGNvbnNvbGUubG9nKG9jZWFuKVxuXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiLm9jZWFuXCIpXG4gICAgICAgICAgLmRhdGEob2NlYW4pXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJvY2VhblwiKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiIzA3MEM1OFwiKVxuXG5cbiAgICAgIGQzLmNzdignLi90ZXN0LmNzdicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBkLmRlcHRoID0gK2QuaGRvcDtcbiAgICAgICAgICBkLnRpbWVzdGFtcDEgPSBuZXcgRGF0ZShkLnRpbWVzdGFtcCk7XG4gICAgICAgICAgZC5sb2NhdGlvbkxvbmcgPSArZC5sb2NhdGlvbkxvbmcgXG4gICAgICAgICAgZC5sb2NhdGlvbkxhdCA9ICtkLmxvY2F0aW9uTGF0XG4gICAgICAgICAgXG5cbiAgICAgIGQzLnNlbGVjdChcIiNzdGFydFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICBjb25zdCBsaW5lUGF0aCA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzBdfSlcbiAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVsxXX0pXG4gICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcblxuICAgICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGxpbmVQYXRoLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICBsaW5lUGF0aFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAudHJhbnNpdGlvbigpIFxuICAgICAgLmR1cmF0aW9uKHNwZWVkKSBcbiAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuICAgICAgcmVuZGVyRGVwdGgoZGF0YSwgc3BlZWQpXG4gICAgICB9KVxuXG4gICAgICBkMy5zZWxlY3QoXCIjcmVzZXRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgICAgfSlcbiAgICAgICAgXG4gIGQzLnNlbGVjdChcIiNzcGVlZC11cFwiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuICAvLyBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAvLyAuc2NhbGUoc2NhbGUpXG4gIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIikgXG5cbiAgICAgICAgY29uc3QgeCA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVswXTtcbiAgICAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbiAgICAgICAgbGV0IG5ld1NjYWxlID0gNjAwMDAwXG5cbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTAwKS5jYWxsKFxuICAgICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBkMy56b29tSWRlbnRpdHkuc2NhbGUobmV3U2NhbGUpLnRyYW5zbGF0ZSgteCwgLXkpKTtcblxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuXG5cbi8vICBkMy5zZWxlY3QoXCIjc3BlZWQtdXBcIikub24oXCJjbGlja1wiLCAoKT0+e1xuXG4vLyAgICAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuLy8gICAgIC8vIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4vLyAgICAgLy8gLnNjYWxlKHNjYWxlKVxuLy8gICAgIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG5cblxuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja1wiKVxuXG4vLyAgICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgXG4vLyAgICAgLy8gZnVuY3Rpb24gem9vbWVkKCkge1xuLy8gICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuLy8gICAgIC8vIH0gIFxuXG4gICAgXG4vLyAgICAgICBjb25zdCB6b29tID0gZDMuem9vbSgpXG4vLyAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDYwMDAwMF0pXG4vLyAgICAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4vLyAgICAgICBzdmcuY2FsbCh6b29tKTsgICAgICBcblxuLy8gICAgIGNvbnN0IHggPSBwcm9qZWN0aW9uKFstMTEyLjQwNywyOC4xMDg3XSlbMF07XG4vLyAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbi8vICAgICBsZXQgbmV3U2NhbGUgPSA2MDAwMDBcblxuLy8gICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjUwMCkuY2FsbChcbi8vICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4vLyAgICAgICAgIGQzLnpvb21JZGVudGl0eS5zY2FsZShuZXdTY2FsZSkudHJhbnNsYXRlKC14LCAteSkpO1xuXG4vLyAgIGNvbnNvbGUubG9nKFwiY2xpY2syXCIpXG4gIFxuLy8gICAgICAgICAvLyBkMy5zZWxlY3RBbGwoJyN3b3JsZC1tYXAgPiBwYXRoJylcbi8vICAgICAgICAgLy8gLnJlbW92ZSgpO1xuXG4vLyAgICAgICAgIC8vIG1ha2VNYXAoc3BlZWQsNjAwMDApXG4vLyB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXBcbiAgICAiLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BsYXNoVWkoKSB7XG4gICAgY29uc3Qgc3BsYXNoVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtcGFnZVwiKVswXVxuXG4gICAgaWYgKHNwbGFzaFVpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgc3BsYXNoVWkuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICBzcGxhc2hVaS5zZXRBdHRyaWJ1dGUoXCJoXCIgLHRydWUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJhY2tpbmdVaSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRvZ2dsZVwiKVxuICAgIGNvbnN0IHRyYWNrVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJhY2tpbmctcGFnZVwiKVswXVxuXG4gICAgaWYgKHRyYWNrVWkuZ2V0QXR0cmlidXRlKFwiaFwiKSA9PT0gXCJ0cnVlXCIpe1xuXG4gICAgICAgIHRyYWNrVWkuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgXG4gICAgICAgIHRyYWNrVWkuc2V0QXR0cmlidXRlKFwiaFwiICx0cnVlKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGVwdGgoKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxuICAgIGNvbnN0IGRlcHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlcHRoLXBhcmVudFwiKVswXVxuXG4gICAgaWYgKGRlcHRoLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcblxuICAgICAgICBkZXB0aC5zZXRBdHRyaWJ1dGUoXCJoXCIgLGZhbHNlKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBcbiAgICAgICAgZGVwdGguc2V0QXR0cmlidXRlKFwiaFwiICx0cnVlKVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHpvb20ob2NlYW4scHJvamVjdGlvbixwYXRoKSB7XG5cbi8vICAgICBkMy50cmFuc2l0aW9uKClcbi8vICAgICAvLyAuZGVsYXkoMjUwKVxuLy8gICAgIC5kdXJhdGlvbigzNTAwKVxuLy8gICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbi8vICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi40MDcsMjguMTA4N107XG4vLyAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuICAgICBcbi8vICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4vLyAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuLy8gICAgICAgfTtcbi8vICAgICB9KVxuXG5cbi8vIGQzLnRyYW5zaXRpb24oKVxuLy8gLmRlbGF5KDI1MDApXG4vLyAuZHVyYXRpb24oMTAwMClcbi8vICAgICAudHdlZW4oXCJ6b29tXCIsZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi40MDcsMjguMTA4N107XG4vLyAgICAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuLy8gICAgICAgICBjb25zdCBzY2FsZUdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5zY2FsZSgpLCA2MDAwMClcbi8vICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4vLyAgICAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKHNjYWxlR3JhZGllbnQodCkpXG4vLyAgICAgICAgICAgICBvY2Vhbi5hdHRyKFwiZFwiLCBwYXRoKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9KVxuXG5cblxuLy8gfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aCkge1xuXG4gICAgY29uc3QgdHdpenpsZUxvY2sgPSB7fTtcbiAgICBjb25zdCBwbG9ua0xvY2sgPSB7fTtcblxuICAgIG9jZWFuXG4gICAgICAgIC5jYWxsKHJvdGF0ZSwzNTAwLHBhdGgpXG4gICAgICAgIC5jYWxsKHpvb21JbiwgNDAwMCxwYXRoKVxuXG5cbiAgICBmdW5jdGlvbiByb3RhdGUoc3BhY2UsIGR1cmF0aW9uLHBhdGgpIHtcbiAgICAgICAgZDMuc2VsZWN0KHR3aXp6bGVMb2NrKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IFstMTEyLjEwNywyNy45MDg3XTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGF0aW9uR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXBvaW50WzBdLCAtcG9pbnRbMV1dKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyb3RhdGF0aW9uR3JhZGllbnQodCkpO1xuICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tSW4oc3BhY2UsIGR1cmF0aW9uLHBhdGgpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdChwbG9ua0xvY2spLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHBJbilcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgLnR3ZWVuKFwiem9vbVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDYwMDAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbi5zY2FsZShzY2FsZUdyYWRpZW50KHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgICAgICAgXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHpvb21PdXQob2NlYW4scHJvamVjdGlvbixwYXRoKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxuICBcbiAgICAgICAgZDMudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLnR3ZWVuKFwiem9vbVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVHcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24uc2NhbGUoKSwgNDAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbiAgICAgICAgICAgICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICBcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uKHRlc3QpXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVUcmFuc2l0aW9uKG9jZWFuLHByb2plY3Rpb24scGF0aCl7XG4gICAgdG9nZ2xlU3BsYXNoVWkoKVxuICAgIHpvb20ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgIHNldFRpbWVvdXQoIHRvZ2dsZVRyYWNraW5nVWksIDQwMDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpe1xuICAgIHRvZ2dsZVRyYWNraW5nVWkoKVxuICAgIHpvb21PdXQob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgIHNldFRpbWVvdXQodG9nZ2xlU3BsYXNoVWksIDEwMDApXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==