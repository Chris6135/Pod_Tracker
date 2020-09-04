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
    right: 10,
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
  var yAxis = d3.axisLeft().scale(yScale).ticks(10).tickPadding(10).tickSize(-innerWidth);
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
var projection = d3.geoOrthographic();
var initialScale = projection.scale(400);
var path = d3.geoPath().projection(projection);
var config = {
  speed: .005,
  verticalTilt: -10,
  horizontalTilt: 0
};
var ocean;
var parent;
var drawSpeed = 100000;
var g = svg.append("g");
var pathToggle = true;
function drawGlobe() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000;
  var width = +svg.style("width").slice(0, -2);
  var height = +svg.style("height").slice(0, -2);
  parent = document.querySelector(".world-map");
  parent.setAttribute("h", true);
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
    console.log("stop");
    a.stop();
    _transition_js__WEBPACK_IMPORTED_MODULE_0__["executeTransition"](ocean, projection, path);
  });
  d3.csv('./raw_data.csv', function (data) {
    data.forEach(function (d) {
      d.depth = +d.hdop;
      d.timestamp1 = new Date(d.timestamp);
      d.locationLong = +d.locationLong;
      d.locationLat = +d.locationLat;
      d.whaleID = +d.whaleID;
      var whales = d3.nest().key(function (d) {
        return d.whaleId;
      }).entries(data);
      d3.select("#start").on("click", function () {
        console.log(data);
        console.log(whales[6].values);

        if (pathToggle) {
          // whales.forEach(function(d,i){
          // let lines = {}
          var lines = svg.append("path").datum(whales[6].values).attr("fill", "none").attr("stroke", "white").attr("class", "line").attr("stroke-width", 3).attr("d", d3.line().x(function (d) {
            return projection([d.locationLong, d.locationLat])[0];
          }).y(function (d) {
            return projection([d.locationLong, d.locationLat])[1];
          }).curve(d3.curveCardinal));
          var totalLength = lines.node().getTotalLength();
          lines.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(drawSpeed).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
          Object(_depth__WEBPACK_IMPORTED_MODULE_1__["renderDepth"])(whales[6].values, drawSpeed);
          pathToggle = false; // })
        }
      });
      d3.select("#reset").on("click", function () {
        d3.selectAll(".line").remove();
        pathToggle = true;
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
    var loader = document.querySelector(".loader");
    console.log(loader);
    loader.setAttribute("h", true);
    parent.setAttribute("h", false);
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
  d3.select("#speed-down").on("click", function () {
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
      var scaleGradient = d3.interpolate(projection.scale(), 40000); //prev 60000

      return function (t) {
        projection.scale(scaleGradient(t));
        ocean.attr("d", path);
      };
    });
  }
}
function zoomOut(ocean, projection, path) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RlcHRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ha2VHbG9iZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWtlTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJzcGVlZCIsInNjYWxlIiwiY29uZmlnIiwidmVydGljYWxUaWx0IiwiaG9yaXpvbnRhbFRpbHQiLCJkMyIsInNlbGVjdCIsImF0dHIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlR2xvYmUiLCJyZW5kZXJEZXB0aCIsImRhdGEiLCJzdmciLCJ4VmFsdWUiLCJkIiwidGltZXN0YW1wMSIsInlWYWx1ZSIsImRlcHRoIiwieUxhYmVsIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZyIsImFwcGVuZCIsInlBeGlzRyIsInN0eWxlIiwidGV4dCIsInhTY2FsZSIsInNjYWxlVGltZSIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwidGlja1BhZGRpbmciLCJ0aWNrU2l6ZSIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwibmljZSIsInBhdGgiLCJkYXR1bSIsImxpbmUiLCJ4IiwieSIsInRvdGFsTGVuZ3RoIiwibm9kZSIsImdldFRvdGFsTGVuZ3RoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJjYWxsIiwicHJvamVjdGlvbiIsImdlb09ydGhvZ3JhcGhpYyIsImluaXRpYWxTY2FsZSIsImdlb1BhdGgiLCJvY2VhbiIsInBhcmVudCIsImRyYXdTcGVlZCIsInBhdGhUb2dnbGUiLCJkcmF3R2xvYmUiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJxdWV1ZSIsImRlZmVyIiwianNvbiIsImF3YWl0IiwiZXJyb3IiLCJsb2NhdGlvbkRhdGEiLCJzZWxlY3RBbGwiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwibmVfMTEwbV9vY2VhbiIsImZlYXR1cmVzIiwiZW50ZXIiLCJlbmFibGVSb3RhdGlvbiIsImEiLCJ0aW1lciIsImVsYXBzZWQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiY3N2IiwiZm9yRWFjaCIsImhkb3AiLCJEYXRlIiwidGltZXN0YW1wIiwibG9jYXRpb25Mb25nIiwibG9jYXRpb25MYXQiLCJ3aGFsZUlEIiwid2hhbGVzIiwibmVzdCIsImtleSIsIndoYWxlSWQiLCJlbnRyaWVzIiwidmFsdWVzIiwibGluZXMiLCJjdXJ2ZSIsImN1cnZlQ2FyZGluYWwiLCJyZW1vdmUiLCJsb2FkZXIiLCJtYWtlTWFwIiwiem9vbWVkIiwiZXZlbnQiLCJ0cmFuc2Zvcm0iLCJ6b29tIiwic2NhbGVFeHRlbnQiLCJyZWFkeSIsImdlb01lcmNhdG9yIiwiY2VudGVyIiwibGluZVBhdGgiLCJuZXdTY2FsZSIsInpvb21JZGVudGl0eSIsInRvZ2dsZVNwbGFzaFVpIiwic3BsYXNoVWkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlVHJhY2tpbmdVaSIsInRyYWNrVWkiLCJ0b2dnbGVEZXB0aCIsInR3aXp6bGVMb2NrIiwicGxvbmtMb2NrIiwiem9vbUluIiwic3BhY2UiLCJ0d2VlbiIsInBvaW50Iiwicm90YXRhdGlvbkdyYWRpZW50IiwiaW50ZXJwb2xhdGUiLCJ0IiwiZWFzZUV4cEluIiwic2NhbGVHcmFkaWVudCIsInpvb21PdXQiLCJleGVjdXRlVHJhbnNpdGlv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VUFBakMsRUFBNENiLElBQTVDLEVBQWlEO0FBQ3BEK0UsZ0JBQWM7QUFDZFIsTUFBSSxDQUFDdEQsS0FBRCxFQUFPSixVQUFQLEVBQWtCYixJQUFsQixDQUFKO0FBQ0FtRyxZQUFVLENBQUVoQixnQkFBRixFQUFvQixJQUFwQixDQUFWO0FBQ0g7QUFFTSxTQUFTaUIsaUJBQVQsQ0FBMkJuRixLQUEzQixFQUFpQ0osVUFBakMsRUFBNENiLElBQTVDLEVBQWlEO0FBQ3BEbUYsa0JBQWdCO0FBQ2hCYyxTQUFPLENBQUNoRixLQUFELEVBQU9KLFVBQVAsRUFBa0JiLElBQWxCLENBQVA7QUFDQW1HLFlBQVUsQ0FBQ3BCLGNBQUQsRUFBaUIsSUFBakIsQ0FBVjtBQUNILEM7Ozs7Ozs7Ozs7O0FDakpELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IG1ha2VNYXAgZnJvbSBcIi4vc2NyaXB0cy9tYWtlTWFwXCJcbmltcG9ydCB7ZHJhd0dsb2JlLCBlbmFibGVSb3RhdGlvbiwgbWFrZUdsb2JlfSBmcm9tIFwiLi9zY3JpcHRzL21ha2VHbG9iZVwiXG5cbmNvbnN0IHdpZHRoID0gNTAwO1xuY29uc3QgaGVpZ2h0ID0gNTAwXG5cbmxldCBzcGVlZD0gMTAwMDAwXG5sZXQgc2NhbGUgPSA1MDAgLy9jYW50IGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgdHJhbnNmb3JtIHRvIHdvcmtcbi8vIGxldCBzY2FsZSA9IDYwMDAwO1xuY29uc3QgY29uZmlnID0ge1xuICAgIHNwZWVkOiAwLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxuICB9XG4gXG5cbmQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG4gICAgLmF0dHIoXCJ3aWR0aFwiICxcIjEwMHZ3XCIpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDB2aFwiKVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG5cblxuZDMuc2VsZWN0KCcjZGVwdGgtZ3JhcGgnKVxuICAgIC5hdHRyKFwid2lkdGhcIiAsd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG4gICAgXG4vLyBkMy5zZWxlY3QoJyNsb2NhdGlvbi1ncmFwaCcpXG4vLyAgICAgLmF0dHIoXCJ3aWR0aFwiICx3aWR0aClcbi8vICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4vLyAgICAgLmF0dHIoXCJzdHlsZVwiLCBcIm91dGxpbmU6IHRoaW4gc29saWQgYmxhY2tcIilcblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5tYWtlR2xvYmUoKTtcblxufSkiLCJcblxuZXhwb3J0IGNvbnN0IHJlbmRlckRlcHRoID0gKGRhdGEsc3BlZWQpID0+e1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2RlcHRoLWdyYXBoJylcbiAgICBjb25zdCB4VmFsdWUgPSBkID0+IGQudGltZXN0YW1wMTtcbiAgICBjb25zdCB5VmFsdWUgPSBkID0+IGQuZGVwdGg7XG4gICAgY29uc3QgeUxhYmVsID0gXCJEZXB0aC0oSGRvcClcIjtcbiAgICBjb25zdCBtYXJnaW4gPSB7IGxlZnQ6NjAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9O1xuXG5cbiAgICBjb25zdCB3aWR0aCA9IHN2Zy5hdHRyKCd3aWR0aCcpXG4gICAgY29uc3QgaGVpZ2h0ID0gc3ZnLmF0dHIoJ2hlaWdodCcpXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuICAgIGNvbnN0IHlBeGlzRyA9IGcuYXBwZW5kKCdnJyk7XG5cbiAgICAgIHlBeGlzRy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzLWxhYmVsJylcbiAgICAgICAgICAuYXR0cigneCcsIC1pbm5lckhlaWdodCAvIDIpXG4gICAgICAgICAgLmF0dHIoJ3knLCAtNDApXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwKWApXG4gICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJibGFja1wiKVxuICAgICAgICAgIC50ZXh0KHlMYWJlbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgICAgLnRpY2tzKDEwKVxuICAgICAgICAgIC50aWNrUGFkZGluZygxMClcbiAgICAgICAgICAudGlja1NpemUoLWlubmVyV2lkdGgpXG4gICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB4U2NhbGVcbiAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgeFZhbHVlKSlcbiAgICAgICAgLnJhbmdlKFswLCBpbm5lcldpZHRoXSlcbiAgICAgICAgLm5pY2UoKTtcbiAgICAgICAgXG4gICAgICAgIHlTY2FsZVxuICAgICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhLCB5VmFsdWUpKVxuICAgICAgICAucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcbiAgICAgICAgLm5pY2UoKTtcblxuICAgY29uc3QgcGF0aCA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxuICAgIC5kYXR1bShkYXRhKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmx1ZVwiKVxuICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiB4U2NhbGUoeFZhbHVlKGQpKSB9KVxuICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geVNjYWxlKHlWYWx1ZShkKSkgfSlcbiAgICAgIClcblxuICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gcGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgICAgcGF0aFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAudHJhbnNpdGlvbigpIFxuICAgICAgLmR1cmF0aW9uKHNwZWVkKSBcbiAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuICAgICB5QXhpc0cuY2FsbCh5QXhpcyk7XG4gICAgICB9OyIsImltcG9ydCAqIGFzIHRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiXG5pbXBvcnQge3JlbmRlckRlcHRofSBmcm9tIFwiLi9kZXB0aFwiXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG5cbmxldCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKClcblxuY29uc3QgaW5pdGlhbFNjYWxlID0gcHJvamVjdGlvbi5zY2FsZSg0MDApO1xuXG5jb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBzcGVlZDogLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxufVxuXG5sZXQgb2NlYW5cbmxldCBwYXJlbnRcbmxldCBkcmF3U3BlZWQgPSAxMDAwMDBcblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG5cbmxldCBwYXRoVG9nZ2xlID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dsb2JlKHNwZWVkID0gMTAwMDAwKSB7ICBcbiAgICBjb25zdCB3aWR0aCA9ICtzdmcuc3R5bGUoXCJ3aWR0aFwiKS5zbGljZSgwLC0yKVxuICAgIGNvbnN0IGhlaWdodCA9ICtzdmcuc3R5bGUoXCJoZWlnaHRcIikuc2xpY2UoMCwtMilcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmxkLW1hcFwiKTtcbiAgICBwYXJlbnQuc2V0QXR0cmlidXRlKFwiaFwiLCB0cnVlKVxuICAgIFxuICAgIHByb2plY3Rpb25cbiAgICAgICAgLnRyYW5zbGF0ZShbd2lkdGggLzIsIGhlaWdodCAvMl0pXG4gICAgICAgIC5yb3RhdGUoWzgyLjQwN10pXG5cbiAgICAvLyBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZC1iYWNrZ3JvdW5kXCIpXG5cbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgLy8gICAgIC50cmFuc2xhdGUoW3dpZHRoIC8yLCBoZWlnaHQgLzJdKVxuXG4gICAgZDMucXVldWUoKVxuICAgICAgICAuZGVmZXIoZDMuanNvbiwgJy4vbmVfMTEwbV9vY2Vhbi5qc29uJylcbiAgICAgICAgLmF3YWl0KChlcnJvciwgZGF0YSwgbG9jYXRpb25EYXRhKSA9PiB7XG4gICAgICAgICAgIG9jZWFuID0gZy5zZWxlY3RBbGwoXCIuc2VnbWVudFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VnbWVudFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgKCkgPT4gJyMwNzBDNTgnKVxuICAgICAgICB9KTtcbn0gICBcblxuXG4gICAgICAgIFxuICAgICAgICAgICAgXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVSb3RhdGlvbigpIHtcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuXG5cbiAgbGV0IGEgPSBkMy50aW1lcihmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbY29uZmlnLnNwZWVkICogZWxhcHNlZCAtIDEyMCwgY29uZmlnLnZlcnRpY2FsVGlsdCwgY29uZmlnLmhvcml6b250YWxUaWx0XSk7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgIH0pO1xuXG4gICAgZDMuc2VsZWN0KFwiI3RyYWNrXCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcblxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BcIilcbiAgICAgICAgYS5zdG9wKClcbiAgICAgICAgdHJhbnNpdGlvbi5leGVjdXRlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpXG4gICAgfSlcblxuICAgIFxuICAgIGQzLmNzdignLi9yYXdfZGF0YS5jc3YnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLmRlcHRoID0gK2QuaGRvcDtcbiAgICAgICAgZC50aW1lc3RhbXAxID0gbmV3IERhdGUoZC50aW1lc3RhbXApO1xuICAgICAgICBkLmxvY2F0aW9uTG9uZyA9ICtkLmxvY2F0aW9uTG9uZyBcbiAgICAgICAgZC5sb2NhdGlvbkxhdCA9ICtkLmxvY2F0aW9uTGF0XG4gICAgICAgIGQud2hhbGVJRCA9ICtkLndoYWxlSURcblxuICAgICAgICBjb25zdCB3aGFsZXMgPSBkMy5uZXN0KClcbiAgICAgICAgLmtleShmdW5jdGlvbihkKSB7cmV0dXJuIGQud2hhbGVJZDt9KVxuICAgICAgICAuZW50cmllcyhkYXRhKTtcblxuXG4gICAgZDMuc2VsZWN0KFwiI3N0YXJ0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cod2hhbGVzWzZdLnZhbHVlcylcblxuICAgIGlmKHBhdGhUb2dnbGUpe1xuXG4gICAgICAgIC8vIHdoYWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGQsaSl7XG4gICAgICAgICAgICAvLyBsZXQgbGluZXMgPSB7fVxuXG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbGluZXMgPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmRhdHVtKHdoYWxlc1s2XS52YWx1ZXMpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgICAgW2QubG9jYXRpb25Mb25nLCBkLmxvY2F0aW9uTGF0XSlbMF19KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzFdfSlcbiAgICAgICAgICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgdG90YWxMZW5ndGggPSBsaW5lcy5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICAgICAgXG4gICBcbiAgICAgICAgbGluZXNcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCB0b3RhbExlbmd0aClcbiAgICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgICAgLmR1cmF0aW9uKGRyYXdTcGVlZClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuXG4gICAgICAgIHJlbmRlckRlcHRoKHdoYWxlc1s2XS52YWx1ZXMsIGRyYXdTcGVlZClcbiAgICAgICAgcGF0aFRvZ2dsZSA9IGZhbHNlXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSlcblxuICAgICAgICAgZDMuc2VsZWN0KFwiI3Jlc2V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgICBwYXRoVG9nZ2xlID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiN6b29tT3V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIHRyYW5zaXRpb24ucmV2ZXJzZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgICAgICAgICAgYSA9IGQzLnRpbWVyKGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoW2NvbmZpZy5zcGVlZCAqIGVsYXBzZWQgLSAxMjAsIGNvbmZpZy52ZXJ0aWNhbFRpbHQsIGNvbmZpZy5ob3Jpem9udGFsVGlsdF0pO1xuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3ZpZXdEZXB0aFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICB0cmFuc2l0aW9uLnRvZ2dsZURlcHRoKClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpIDsgICAgXG4gICAgY29uc29sZS5sb2cobG9hZGVyKVxuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoXCJoXCIsIHRydWUpXG4gICAgcGFyZW50LnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG59KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUdsb2JlKCl7XG4gICAgZHJhd0dsb2JlKClcbiAgICBlbmFibGVSb3RhdGlvbigpXG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHtyZW5kZXJEZXB0aH0gZnJvbSBcIi4vZGVwdGhcIlxuXG5cbiBjb25zdCBtYWtlTWFwID0gKHNwZWVkLHNjYWxlLGRhdGEpID0+e1xuXG4gICAgXG4gICAgZDMuc2VsZWN0KFwiI3NwZWVkLWRvd25cIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBzcGVlZCA9IDEwMDAwMDAwXG4gICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0gIFxuXG4gICAgY29uc3Qgem9vbSA9IGQzLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgNjAwMDAwXSlcbiAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgc3ZnLmNhbGwoem9vbSk7ICAgICAgXG5cbiAgICBkMy5xdWV1ZSgpXG4gICAgLmRlZmVyKGQzLmpzb24sIFwiLi9uZV8xMTBtX29jZWFuLmpzb25cIilcbiAgICAuYXdhaXQocmVhZHkpXG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAgICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAgIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuICAgICAgICBcbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBmdW5jdGlvbiByZWFkeSAoZXJyb3IsZGF0YSl7XG4gICAgICBjb25zdCBvY2VhbiA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzXG5cblxuICAgICAgc3ZnLnNlbGVjdEFsbChcIi5vY2VhblwiKVxuICAgICAgICAgIC5kYXRhKG9jZWFuKVxuICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwib2NlYW5cIilcbiAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIixcIiMwNzBDNThcIilcblxuXG4gICAgICBkMy5jc3YoJy4vdGVzdC5jc3YnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgZC5kZXB0aCA9ICtkLmhkb3A7XG4gICAgICAgICAgZC50aW1lc3RhbXAxID0gbmV3IERhdGUoZC50aW1lc3RhbXApO1xuICAgICAgICAgIGQubG9jYXRpb25Mb25nID0gK2QubG9jYXRpb25Mb25nIFxuICAgICAgICAgIGQubG9jYXRpb25MYXQgPSArZC5sb2NhdGlvbkxhdFxuICAgICAgICAgIFxuXG4gICAgICBkMy5zZWxlY3QoXCIjc3RhcnRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgY29uc3QgbGluZVBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVswXX0pXG4gICAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gcHJvamVjdGlvbihcbiAgICAgICAgICAgICAgW2QubG9jYXRpb25Mb25nLCBkLmxvY2F0aW9uTGF0XSlbMV19KVxuICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUNhcmRpbmFsKSk7XG5cbiAgICAgICAgICB2YXIgdG90YWxMZW5ndGggPSBsaW5lUGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgICAgbGluZVBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgIC5kdXJhdGlvbihzcGVlZCkgXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cbiAgICAgIHJlbmRlckRlcHRoKGRhdGEsIHNwZWVkKVxuICAgICAgfSlcblxuICAgICAgZDMuc2VsZWN0KFwiI3Jlc2V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgICAgfSlcbiAgICAgICAgXG4gIGQzLnNlbGVjdChcIiNzcGVlZC11cFwiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuICAvLyBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAvLyAuc2NhbGUoc2NhbGUpXG4gIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIikgXG5cbiAgICAgICAgY29uc3QgeCA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVswXTtcbiAgICAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbiAgICAgICAgbGV0IG5ld1NjYWxlID0gNjAwMDAwXG5cbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTAwKS5jYWxsKFxuICAgICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBkMy56b29tSWRlbnRpdHkuc2NhbGUobmV3U2NhbGUpLnRyYW5zbGF0ZSgteCwgLXkpKTtcblxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuXG5cbi8vICBkMy5zZWxlY3QoXCIjc3BlZWQtdXBcIikub24oXCJjbGlja1wiLCAoKT0+e1xuXG4vLyAgICAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuLy8gICAgIC8vIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4vLyAgICAgLy8gLnNjYWxlKHNjYWxlKVxuLy8gICAgIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG5cblxuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja1wiKVxuXG4vLyAgICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgXG4vLyAgICAgLy8gZnVuY3Rpb24gem9vbWVkKCkge1xuLy8gICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuLy8gICAgIC8vIH0gIFxuXG4gICAgXG4vLyAgICAgICBjb25zdCB6b29tID0gZDMuem9vbSgpXG4vLyAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDYwMDAwMF0pXG4vLyAgICAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4vLyAgICAgICBzdmcuY2FsbCh6b29tKTsgICAgICBcblxuLy8gICAgIGNvbnN0IHggPSBwcm9qZWN0aW9uKFstMTEyLjQwNywyOC4xMDg3XSlbMF07XG4vLyAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbi8vICAgICBsZXQgbmV3U2NhbGUgPSA2MDAwMDBcblxuLy8gICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjUwMCkuY2FsbChcbi8vICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4vLyAgICAgICAgIGQzLnpvb21JZGVudGl0eS5zY2FsZShuZXdTY2FsZSkudHJhbnNsYXRlKC14LCAteSkpO1xuXG4vLyAgIGNvbnNvbGUubG9nKFwiY2xpY2syXCIpXG4gIFxuLy8gICAgICAgICAvLyBkMy5zZWxlY3RBbGwoJyN3b3JsZC1tYXAgPiBwYXRoJylcbi8vICAgICAgICAgLy8gLnJlbW92ZSgpO1xuXG4vLyAgICAgICAgIC8vIG1ha2VNYXAoc3BlZWQsNjAwMDApXG4vLyB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXBcbiAgICAiLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BsYXNoVWkoKSB7XG4gICAgY29uc3Qgc3BsYXNoVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtcGFnZVwiKVswXVxuXG4gICAgaWYgKHNwbGFzaFVpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgc3BsYXNoVWkuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICBzcGxhc2hVaS5zZXRBdHRyaWJ1dGUoXCJoXCIgLHRydWUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJhY2tpbmdVaSgpIHtcbiAgICBjb25zdCB0cmFja1VpID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYWNraW5nLXBhZ2VcIilbMF1cblxuICAgIGlmICh0cmFja1VpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcblxuICAgICAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFxuICAgICAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURlcHRoKCkge1xuICAgIGNvbnN0IGRlcHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlcHRoLXBhcmVudFwiKVswXVxuXG4gICAgaWYgKGRlcHRoLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcblxuICAgICAgICBkZXB0aC5zZXRBdHRyaWJ1dGUoXCJoXCIgLGZhbHNlKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBcbiAgICAgICAgZGVwdGguc2V0QXR0cmlidXRlKFwiaFwiICx0cnVlKVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHpvb20ob2NlYW4scHJvamVjdGlvbixwYXRoKSB7XG5cbi8vICAgICBkMy50cmFuc2l0aW9uKClcbi8vICAgICAvLyAuZGVsYXkoMjUwKVxuLy8gICAgIC5kdXJhdGlvbigzNTAwKVxuLy8gICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbi8vICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi40MDcsMjguMTA4N107XG4vLyAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuICAgICBcbi8vICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4vLyAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuLy8gICAgICAgfTtcbi8vICAgICB9KVxuXG5cbi8vIGQzLnRyYW5zaXRpb24oKVxuLy8gLmRlbGF5KDI1MDApXG4vLyAuZHVyYXRpb24oMTAwMClcbi8vICAgICAudHdlZW4oXCJ6b29tXCIsZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi40MDcsMjguMTA4N107XG4vLyAgICAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuLy8gICAgICAgICBjb25zdCBzY2FsZUdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5zY2FsZSgpLCA2MDAwMClcbi8vICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4vLyAgICAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKHNjYWxlR3JhZGllbnQodCkpXG4vLyAgICAgICAgICAgICBvY2Vhbi5hdHRyKFwiZFwiLCBwYXRoKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9KVxuXG5cblxuLy8gfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aCkge1xuXG4gICAgY29uc3QgdHdpenpsZUxvY2sgPSB7fTtcbiAgICBjb25zdCBwbG9ua0xvY2sgPSB7fTtcblxuICAgIG9jZWFuXG4gICAgICAgIC5jYWxsKHJvdGF0ZSwzNTAwLHBhdGgpXG4gICAgICAgIC5jYWxsKHpvb21JbiwgNDAwMCxwYXRoKVxuXG5cbiAgICBmdW5jdGlvbiByb3RhdGUoc3BhY2UsIGR1cmF0aW9uLHBhdGgpIHtcbiAgICAgICAgZDMuc2VsZWN0KHR3aXp6bGVMb2NrKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IFstMTEyLjEwNywyNy45MDg3XTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGF0aW9uR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXBvaW50WzBdLCAtcG9pbnRbMV1dKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyb3RhdGF0aW9uR3JhZGllbnQodCkpO1xuICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tSW4oc3BhY2UsIGR1cmF0aW9uLHBhdGgpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdChwbG9ua0xvY2spLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHBJbilcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgLnR3ZWVuKFwiem9vbVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDQwMDAwKSAvL3ByZXYgNjAwMDBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gem9vbU91dChvY2Vhbixwcm9qZWN0aW9uLHBhdGgpIHtcbiAgXG4gICAgICAgIGQzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC50d2VlbihcInpvb21cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDQwMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKHNjYWxlR3JhZGllbnQodCkpXG4gICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbih0ZXN0KVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpe1xuICAgIHRvZ2dsZVNwbGFzaFVpKClcbiAgICB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICBzZXRUaW1lb3V0KCB0b2dnbGVUcmFja2luZ1VpLCA0MDAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKXtcbiAgICB0b2dnbGVUcmFja2luZ1VpKClcbiAgICB6b29tT3V0KG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICBzZXRUaW1lb3V0KHRvZ2dsZVNwbGFzaFVpLCAxMDAwKVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=