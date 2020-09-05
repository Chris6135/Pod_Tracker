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
      d.name = d.name;
      var whales = d3.nest().key(function (d) {
        return d.name;
      }).entries(data);
      d3.select("#start").on("click", function () {
        console.log("Started");
        console.log(pathToggle);

        if (pathToggle) {
          whales.forEach(function (d, i) {
            var lines = svg.append("path").datum(d.values).attr("id", d.key).attr("fill", "none").attr("stroke", "white").attr("class", "line").attr("opacity", "0.1").attr("stroke-width", 3).attr("d", d3.line().x(function (d) {
              return projection([d.locationLong, d.locationLat])[0];
            }).y(function (d) {
              return projection([d.locationLong, d.locationLat])[1];
            }).curve(d3.curveCardinal));
            var totalLength = lines.node().getTotalLength();
            lines.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(drawSpeed).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
          });
          var whale = document.querySelector("#Phil");
          whale.setAttribute("opacity", "1");
          Object(_depth__WEBPACK_IMPORTED_MODULE_1__["renderDepth"])(whales[6].values, drawSpeed);
          pathToggle = false;
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
        pathToggle = true;
      });
      d3.select("#viewDepth").on("click", function () {
        _transition_js__WEBPACK_IMPORTED_MODULE_0__["toggleDepth"]();
      });
      d3.select("#select-whale").on("click", function () {
        console.log("selected");
        var whaleList = document.querySelector(".whale-selector");
        console.log(whaleList);

        if (whaleList.getAttribute("h") === "true") {
          whaleList.setAttribute("h", false);
        } else {
          whaleList.setAttribute("h", true);
        }
      });
      whales.forEach(function (d, i) {
        d3.select("." + d.key).on("click", function () {
          var whale;
          whales.forEach(function (d) {
            whale = document.querySelector("#" + d.key);
            whale.setAttribute("opacity", "0.1");
          });
          whale = document.querySelector("#" + d.key);
          whale.setAttribute("opacity", "1");
        });
      });
    });
    var loader = document.querySelector(".loader");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RlcHRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ha2VHbG9iZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWtlTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiLCJzcGVlZCIsInNjYWxlIiwiY29uZmlnIiwidmVydGljYWxUaWx0IiwiaG9yaXpvbnRhbFRpbHQiLCJkMyIsInNlbGVjdCIsImF0dHIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlR2xvYmUiLCJyZW5kZXJEZXB0aCIsImRhdGEiLCJzdmciLCJ4VmFsdWUiLCJkIiwidGltZXN0YW1wMSIsInlWYWx1ZSIsImRlcHRoIiwieUxhYmVsIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZyIsImFwcGVuZCIsInlBeGlzRyIsInN0eWxlIiwidGV4dCIsInhTY2FsZSIsInNjYWxlVGltZSIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwidGlja1BhZGRpbmciLCJ0aWNrU2l6ZSIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwibmljZSIsInBhdGgiLCJkYXR1bSIsImxpbmUiLCJ4IiwieSIsInRvdGFsTGVuZ3RoIiwibm9kZSIsImdldFRvdGFsTGVuZ3RoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VMaW5lYXIiLCJjYWxsIiwicHJvamVjdGlvbiIsImdlb09ydGhvZ3JhcGhpYyIsImluaXRpYWxTY2FsZSIsImdlb1BhdGgiLCJvY2VhbiIsInBhcmVudCIsImRyYXdTcGVlZCIsInBhdGhUb2dnbGUiLCJkcmF3R2xvYmUiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJxdWV1ZSIsImRlZmVyIiwianNvbiIsImF3YWl0IiwiZXJyb3IiLCJsb2NhdGlvbkRhdGEiLCJzZWxlY3RBbGwiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwibmVfMTEwbV9vY2VhbiIsImZlYXR1cmVzIiwiZW50ZXIiLCJlbmFibGVSb3RhdGlvbiIsImEiLCJ0aW1lciIsImVsYXBzZWQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiY3N2IiwiZm9yRWFjaCIsImhkb3AiLCJEYXRlIiwidGltZXN0YW1wIiwibG9jYXRpb25Mb25nIiwibG9jYXRpb25MYXQiLCJ3aGFsZUlEIiwibmFtZSIsIndoYWxlcyIsIm5lc3QiLCJrZXkiLCJlbnRyaWVzIiwiaSIsImxpbmVzIiwidmFsdWVzIiwiY3VydmUiLCJjdXJ2ZUNhcmRpbmFsIiwid2hhbGUiLCJyZW1vdmUiLCJ3aGFsZUxpc3QiLCJnZXRBdHRyaWJ1dGUiLCJsb2FkZXIiLCJtYWtlTWFwIiwiem9vbWVkIiwiZXZlbnQiLCJ0cmFuc2Zvcm0iLCJ6b29tIiwic2NhbGVFeHRlbnQiLCJyZWFkeSIsImdlb01lcmNhdG9yIiwiY2VudGVyIiwibGluZVBhdGgiLCJuZXdTY2FsZSIsInpvb21JZGVudGl0eSIsInRvZ2dsZVNwbGFzaFVpIiwic3BsYXNoVWkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlVHJhY2tpbmdVaSIsInRyYWNrVWkiLCJ0b2dnbGVEZXB0aCIsInR3aXp6bGVMb2NrIiwicGxvbmtMb2NrIiwiem9vbUluIiwic3BhY2UiLCJ0d2VlbiIsInBvaW50Iiwicm90YXRhdGlvbkdyYWRpZW50IiwiaW50ZXJwb2xhdGUiLCJ0IiwiZWFzZUV4cEluIiwic2NhbGVHcmFkaWVudCIsInpvb21P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R0FBbkMsQ0FBdEI7QUFDQSxXQUFPLFVBQVM2SSxDQUFULEVBQVk7QUFDZnBGLGdCQUFVLENBQUN6RCxLQUFYLENBQWlCK0ksYUFBYSxDQUFDRixDQUFELENBQTlCO0FBQ0FoRixXQUFLLENBQUN2RCxJQUFOLENBQVcsR0FBWCxFQUFnQnNDLElBQWhCO0FBQ0gsS0FIRDtBQUlILEdBUkw7QUFXUCxDLENBRUQ7O0FBTU8sU0FBU3FHLGlCQUFULENBQTJCcEYsS0FBM0IsRUFBaUNKLFVBQWpDLEVBQTRDYixJQUE1QyxFQUFpRDtBQUNwRG1GLGdCQUFjO0FBQ2RSLE1BQUksQ0FBQzFELEtBQUQsRUFBT0osVUFBUCxFQUFrQmIsSUFBbEIsQ0FBSjtBQUNBc0csWUFBVSxDQUFFaEIsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBVjtBQUNIO0FBRU0sU0FBU2lCLGlCQUFULENBQTJCdEYsS0FBM0IsRUFBaUNKLFVBQWpDLEVBQTRDYixJQUE1QyxFQUFpRDtBQUNwRHNGLGtCQUFnQjtBQUNoQmMsU0FBTyxDQUFDbkYsS0FBRCxFQUFPSixVQUFQLEVBQWtCYixJQUFsQixDQUFQO0FBQ0FzRyxZQUFVLENBQUNuQixjQUFELEVBQWlCLElBQWpCLENBQVY7QUFDSCxDOzs7Ozs7Ozs7OztBQ2pKRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBtYWtlTWFwIGZyb20gXCIuL3NjcmlwdHMvbWFrZU1hcFwiXG5pbXBvcnQge2RyYXdHbG9iZSwgZW5hYmxlUm90YXRpb24sIG1ha2VHbG9iZX0gZnJvbSBcIi4vc2NyaXB0cy9tYWtlR2xvYmVcIlxuXG5jb25zdCB3aWR0aCA9IDUwMDtcbmNvbnN0IGhlaWdodCA9IDUwMFxuXG5sZXQgc3BlZWQ9IDEwMDAwMFxubGV0IHNjYWxlID0gNTAwIC8vY2FudCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdGhlIHRyYW5zZm9ybSB0byB3b3JrXG4vLyBsZXQgc2NhbGUgPSA2MDAwMDtcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBzcGVlZDogMC4wMDUsXG4gICAgdmVydGljYWxUaWx0OiAtMTAsXG4gICAgaG9yaXpvbnRhbFRpbHQ6IDBcbiAgfVxuIFxuXG5kMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIC5hdHRyKFwid2lkdGhcIiAsXCIxMDB2d1wiKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIFwiMTAwdmhcIilcbiAgICAuYXR0cihcInN0eWxlXCIsIFwib3V0bGluZTogdGhpbiBzb2xpZCBibGFja1wiKVxuXG5cbmQzLnNlbGVjdCgnI2RlcHRoLWdyYXBoJylcbiAgICAuYXR0cihcIndpZHRoXCIgLHdpZHRoKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAuYXR0cihcInN0eWxlXCIsIFwib3V0bGluZTogdGhpbiBzb2xpZCBibGFja1wiKVxuICAgIFxuLy8gZDMuc2VsZWN0KCcjbG9jYXRpb24tZ3JhcGgnKVxuLy8gICAgIC5hdHRyKFwid2lkdGhcIiAsd2lkdGgpXG4vLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuLy8gICAgIC5hdHRyKFwic3R5bGVcIiwgXCJvdXRsaW5lOiB0aGluIHNvbGlkIGJsYWNrXCIpXG5cblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xubWFrZUdsb2JlKCk7XG5cbn0pIiwiXG5cbmV4cG9ydCBjb25zdCByZW5kZXJEZXB0aCA9IChkYXRhLHNwZWVkKSA9PntcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNkZXB0aC1ncmFwaCcpXG4gICAgY29uc3QgeFZhbHVlID0gZCA9PiBkLnRpbWVzdGFtcDE7XG4gICAgY29uc3QgeVZhbHVlID0gZCA9PiBkLmRlcHRoO1xuICAgIGNvbnN0IHlMYWJlbCA9IFwiRGVwdGgtKEhkb3ApXCI7XG4gICAgY29uc3QgbWFyZ2luID0geyBsZWZ0OjYwLCByaWdodDogMTAsIHRvcDogMTAsIGJvdHRvbTogMTAgfTtcblxuXG4gICAgY29uc3Qgd2lkdGggPSBzdmcuYXR0cignd2lkdGgnKVxuICAgIGNvbnN0IGhlaWdodCA9IHN2Zy5hdHRyKCdoZWlnaHQnKVxuICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcbiAgICBjb25zdCB5QXhpc0cgPSBnLmFwcGVuZCgnZycpO1xuXG4gICAgICB5QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcy1sYWJlbCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAtaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgICAgIC5hdHRyKCd5JywgLTQwKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgcm90YXRlKC05MClgKVxuICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAudGV4dCh5TGFiZWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgIC50aWNrcygxMClcbiAgICAgICAgICAudGlja1BhZGRpbmcoMTApXG4gICAgICAgICAgLnRpY2tTaXplKC1pbm5lcldpZHRoKVxuICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgeFNjYWxlXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIHhWYWx1ZSkpXG4gICAgICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pXG4gICAgICAgIC5uaWNlKCk7XG4gICAgICAgIFxuICAgICAgICB5U2NhbGVcbiAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgeVZhbHVlKSlcbiAgICAgICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pXG4gICAgICAgIC5uaWNlKCk7XG5cbiAgIGNvbnN0IHBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYClcbiAgICAuZGF0dW0oZGF0YSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKHhWYWx1ZShkKSkgfSlcbiAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZSh5VmFsdWUoZCkpIH0pXG4gICAgICApXG5cbiAgICAgIHZhciB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgIHBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgIC5kdXJhdGlvbihzcGVlZCkgXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cbiAgICAgeUF4aXNHLmNhbGwoeUF4aXMpO1xuICAgICAgfTsiLCJpbXBvcnQgKiBhcyB0cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIlxuaW1wb3J0IHtyZW5kZXJEZXB0aH0gZnJvbSBcIi4vZGVwdGhcIlxuXG5jb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuXG5sZXQgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpXG5cbmNvbnN0IGluaXRpYWxTY2FsZSA9IHByb2plY3Rpb24uc2NhbGUoNDAwKTtcblxuY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgc3BlZWQ6IC4wMDUsXG4gICAgdmVydGljYWxUaWx0OiAtMTAsXG4gICAgaG9yaXpvbnRhbFRpbHQ6IDBcbn1cblxubGV0IG9jZWFuXG5sZXQgcGFyZW50XG5sZXQgZHJhd1NwZWVkID0gMTAwMDAwXG5cbmNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG5sZXQgcGF0aFRvZ2dsZSA9IHRydWVcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdHbG9iZShzcGVlZCA9IDEwMDAwMCkgeyAgXG4gICAgY29uc3Qgd2lkdGggPSArc3ZnLnN0eWxlKFwid2lkdGhcIikuc2xpY2UoMCwtMilcbiAgICBjb25zdCBoZWlnaHQgPSArc3ZnLnN0eWxlKFwiaGVpZ2h0XCIpLnNsaWNlKDAsLTIpXG4gICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3JsZC1tYXBcIik7XG4gICAgcGFyZW50LnNldEF0dHJpYnV0ZShcImhcIiwgdHJ1ZSlcbiAgICBcbiAgICBwcm9qZWN0aW9uXG4gICAgICAgIC50cmFuc2xhdGUoW3dpZHRoIC8yLCBoZWlnaHQgLzJdKVxuICAgICAgICAucm90YXRlKFs4Mi40MDddKVxuXG4gICAgLy8gY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGQtYmFja2dyb3VuZFwiKVxuXG4gICAgLy8gYmFja2dyb3VuZFxuICAgIC8vICAgICAudHJhbnNsYXRlKFt3aWR0aCAvMiwgaGVpZ2h0IC8yXSlcblxuICAgIGQzLnF1ZXVlKClcbiAgICAgICAgLmRlZmVyKGQzLmpzb24sICcuL25lXzExMG1fb2NlYW4uanNvbicpXG4gICAgICAgIC5hd2FpdCgoZXJyb3IsIGRhdGEsIGxvY2F0aW9uRGF0YSkgPT4ge1xuICAgICAgICAgICBvY2VhbiA9IGcuc2VsZWN0QWxsKFwiLnNlZ21lbnRcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKGRhdGEsIGRhdGEub2JqZWN0cy5uZV8xMTBtX29jZWFuKS5mZWF0dXJlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlZ21lbnRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsICgpID0+ICcjMDcwQzU4JylcbiAgICAgICAgfSk7XG59ICAgXG5cblxuICAgICAgICBcbiAgICAgICAgICAgIFxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlUm90YXRpb24oKSB7XG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuXG4gIGxldCBhID0gZDMudGltZXIoZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoW2NvbmZpZy5zcGVlZCAqIGVsYXBzZWQgLSAxMjAsIGNvbmZpZy52ZXJ0aWNhbFRpbHQsIGNvbmZpZy5ob3Jpem9udGFsVGlsdF0pO1xuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBwYXRoKTtcbiAgICB9KTtcblxuICAgIGQzLnNlbGVjdChcIiN0cmFja1wiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wXCIpXG4gICAgICAgIGEuc3RvcCgpXG4gICAgICAgIHRyYW5zaXRpb24uZXhlY3V0ZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgIH0pXG5cbiAgICBcbiAgICBkMy5jc3YoJy4vcmF3X2RhdGEuY3N2JywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgZC5kZXB0aCA9ICtkLmhkb3A7XG4gICAgICAgIGQudGltZXN0YW1wMSA9IG5ldyBEYXRlKGQudGltZXN0YW1wKTtcbiAgICAgICAgZC5sb2NhdGlvbkxvbmcgPSArZC5sb2NhdGlvbkxvbmcgXG4gICAgICAgIGQubG9jYXRpb25MYXQgPSArZC5sb2NhdGlvbkxhdFxuICAgICAgICBkLndoYWxlSUQgPSArZC53aGFsZUlEXG4gICAgICAgIGQubmFtZSA9IGQubmFtZVxuXG4gICAgICAgIGNvbnN0IHdoYWxlcyA9IGQzLm5lc3QoKVxuICAgICAgICAua2V5KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5uYW1lO30pXG4gICAgICAgIC5lbnRyaWVzKGRhdGEpO1xuXG5cbiAgICBkMy5zZWxlY3QoXCIjc3RhcnRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWRcIilcbiAgICAgICAgY29uc29sZS5sb2cocGF0aFRvZ2dsZSlcblxuICAgICAgXG5cbiAgICBpZihwYXRoVG9nZ2xlKXtcblxuICAgICAgICB3aGFsZXMuZm9yRWFjaChmdW5jdGlvbihkLGkpe1xuICAgICAgICAgICBsZXQgbGluZXMgPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAuZGF0dW0oZC52YWx1ZXMpXG4gICAgICAgICAgIC5hdHRyKFwiaWRcIiwgZC5rZXkpXG4gICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgXCIwLjFcIilcbiAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICAgW2QubG9jYXRpb25Mb25nLCBkLmxvY2F0aW9uTGF0XSlbMF19KVxuICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gcHJvamVjdGlvbihcbiAgICAgICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVsxXX0pXG4gICAgICAgICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICBsZXQgdG90YWxMZW5ndGggPSBsaW5lcy5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICAgICBcbiAgXG4gICAgICAgbGluZXNcbiAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgdG90YWxMZW5ndGggKyBcIiBcIiArIHRvdGFsTGVuZ3RoKVxuICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgICAuZHVyYXRpb24oZHJhd1NwZWVkKVxuICAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpXG4gICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgd2hhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1BoaWxcIik7XG4gICAgICAgIHdoYWxlLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIxXCIpXG4gICAgICAgIFxuXG4gICAgICBcblxuICAgICAgICByZW5kZXJEZXB0aCh3aGFsZXNbNl0udmFsdWVzLCBkcmF3U3BlZWQpXG4gICAgICAgIHBhdGhUb2dnbGUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSlcblxuIFxuIFxuICAgICAgICAgZDMuc2VsZWN0KFwiI3Jlc2V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgICBwYXRoVG9nZ2xlID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiN6b29tT3V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIHRyYW5zaXRpb24ucmV2ZXJzZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgICAgICAgICAgYSA9IGQzLnRpbWVyKGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoW2NvbmZpZy5zcGVlZCAqIGVsYXBzZWQgLSAxMjAsIGNvbmZpZy52ZXJ0aWNhbFRpbHQsIGNvbmZpZy5ob3Jpem9udGFsVGlsdF0pO1xuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwYXRoVG9nZ2xlID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiN2aWV3RGVwdGhcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgdHJhbnNpdGlvbi50b2dnbGVEZXB0aCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3NlbGVjdC13aGFsZVwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkXCIpXG4gICAgICAgICAgICBsZXQgd2hhbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGFsZS1zZWxlY3RvclwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdoYWxlTGlzdClcblxuICAgICAgICAgICAgaWYgKHdoYWxlTGlzdC5nZXRBdHRyaWJ1dGUoXCJoXCIpID09PSBcInRydWVcIil7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHdoYWxlTGlzdC5zZXRBdHRyaWJ1dGUoXCJoXCIgLGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aGFsZUxpc3Quc2V0QXR0cmlidXRlKFwiaFwiICx0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSlcblxuICAgICAgICB3aGFsZXMuZm9yRWFjaCgoZCxpKT0+e1xuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLlwiK2Qua2V5KS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgbGV0IHdoYWxlXG4gICAgICAgICAgICAgICAgd2hhbGVzLmZvckVhY2goKGQpPT57XG4gICAgICAgICAgICAgICAgICAgIHdoYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGQua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgd2hhbGUuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjAuMVwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgd2hhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZC5rZXkpO1xuICAgICAgICAgICAgICAgIHdoYWxlLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIxXCIpXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpIDsgICAgXG4gICAgbG9hZGVyLnNldEF0dHJpYnV0ZShcImhcIiwgdHJ1ZSlcbiAgICBwYXJlbnQuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbn0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlR2xvYmUoKXtcbiAgICBkcmF3R2xvYmUoKVxuICAgIGVuYWJsZVJvdGF0aW9uKClcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQge3JlbmRlckRlcHRofSBmcm9tIFwiLi9kZXB0aFwiXG5cblxuIGNvbnN0IG1ha2VNYXAgPSAoc3BlZWQsc2NhbGUsZGF0YSkgPT57XG5cbiAgICBcbiAgICBkMy5zZWxlY3QoXCIjc3BlZWQtZG93blwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIHNwZWVkID0gMTAwMDAwMDBcbiAgICAgICAgY29uc29sZS5sb2coc3BlZWQpXG4gICAgXG4gICAgfSlcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfSAgXG5cbiAgICBjb25zdCB6b29tID0gZDMuem9vbSgpXG4gICAgLnNjYWxlRXh0ZW50KFsxLCA2MDAwMDBdKVxuICAgIC5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICBzdmcuY2FsbCh6b29tKTsgICAgICBcblxuICAgIGQzLnF1ZXVlKClcbiAgICAuZGVmZXIoZDMuanNvbiwgXCIuL25lXzExMG1fb2NlYW4uanNvblwiKVxuICAgIC5hd2FpdChyZWFkeSlcblxuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4gICAgICAgIC5zY2FsZShzY2FsZSlcbiAgICAgICAgLmNlbnRlcihbLTExMi40MDcsMjguMTA4N10pXG4gICAgICAgIFxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgIGZ1bmN0aW9uIHJlYWR5IChlcnJvcixkYXRhKXtcbiAgICAgIGNvbnN0IG9jZWFuID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMubmVfMTEwbV9vY2VhbikuZmVhdHVyZXNcblxuXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiLm9jZWFuXCIpXG4gICAgICAgICAgLmRhdGEob2NlYW4pXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJvY2VhblwiKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiIzA3MEM1OFwiKVxuXG5cbiAgICAgIGQzLmNzdignLi90ZXN0LmNzdicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgIGRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBkLmRlcHRoID0gK2QuaGRvcDtcbiAgICAgICAgICBkLnRpbWVzdGFtcDEgPSBuZXcgRGF0ZShkLnRpbWVzdGFtcCk7XG4gICAgICAgICAgZC5sb2NhdGlvbkxvbmcgPSArZC5sb2NhdGlvbkxvbmcgXG4gICAgICAgICAgZC5sb2NhdGlvbkxhdCA9ICtkLmxvY2F0aW9uTGF0XG4gICAgICAgICAgXG5cbiAgICAgIGQzLnNlbGVjdChcIiNzdGFydFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICBjb25zdCBsaW5lUGF0aCA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwid2hpdGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzBdfSlcbiAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVsxXX0pXG4gICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQ2FyZGluYWwpKTtcblxuICAgICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGxpbmVQYXRoLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICBsaW5lUGF0aFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAudHJhbnNpdGlvbigpIFxuICAgICAgLmR1cmF0aW9uKHNwZWVkKSBcbiAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuICAgICAgcmVuZGVyRGVwdGgoZGF0YSwgc3BlZWQpXG4gICAgICB9KVxuXG4gICAgICBkMy5zZWxlY3QoXCIjcmVzZXRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgY29uc29sZS5sb2coc3BlZWQpXG4gICAgICB9KVxuICAgICAgICBcbiAgZDMuc2VsZWN0KFwiI3NwZWVkLXVwXCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcblxuICAvLyBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuXG4gIC8vIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4gIC8vIC5zY2FsZShzY2FsZSlcbiAgLy8gLmNlbnRlcihbLTExMi40MDcsMjguMTA4N10pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKSBcblxuICAgICAgICBjb25zdCB4ID0gcHJvamVjdGlvbihbLTExMi40MDcsMjguMTA4N10pWzBdO1xuICAgICAgICBjb25zdCB5ID0gcHJvamVjdGlvbihbLTExMi40MDcsMjguMTA4N10pWzFdO1xuICAgICAgICBsZXQgbmV3U2NhbGUgPSA2MDAwMDBcblxuICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MDApLmNhbGwoXG4gICAgICAgICAgICB6b29tLnRyYW5zZm9ybSxcbiAgICAgICAgICAgIGQzLnpvb21JZGVudGl0eS5zY2FsZShuZXdTY2FsZSkudHJhbnNsYXRlKC14LCAteSkpO1xuXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59XG5cblxuLy8gIGQzLnNlbGVjdChcIiNzcGVlZC11cFwiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbi8vICAgICAvLyBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuXG4vLyAgICAgLy8gY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb01lcmNhdG9yKClcbi8vICAgICAvLyAuc2NhbGUoc2NhbGUpXG4vLyAgICAgLy8gLmNlbnRlcihbLTExMi40MDcsMjguMTA4N10pXG5cblxuXG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhcImNsaWNrXCIpXG5cbi8vICAgICAvLyBjb25zdCBnID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICBcbi8vICAgICAvLyBmdW5jdGlvbiB6b29tZWQoKSB7XG4vLyAgICAgLy8gZy5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4vLyAgICAgLy8gfSAgXG5cbiAgICBcbi8vICAgICAgIGNvbnN0IHpvb20gPSBkMy56b29tKClcbi8vICAgICAgIC5zY2FsZUV4dGVudChbMSwgNjAwMDAwXSlcbi8vICAgICAgIC5vbihcInpvb21cIiwgem9vbWVkKTtcbi8vICAgICAgIHN2Zy5jYWxsKHpvb20pOyAgICAgIFxuXG4vLyAgICAgY29uc3QgeCA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVswXTtcbi8vICAgICBjb25zdCB5ID0gcHJvamVjdGlvbihbLTExMi40MDcsMjguMTA4N10pWzFdO1xuLy8gICAgIGxldCBuZXdTY2FsZSA9IDYwMDAwMFxuXG4vLyAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTAwKS5jYWxsKFxuLy8gICAgICAgICB6b29tLnRyYW5zZm9ybSxcbi8vICAgICAgICAgZDMuem9vbUlkZW50aXR5LnNjYWxlKG5ld1NjYWxlKS50cmFuc2xhdGUoLXgsIC15KSk7XG5cbi8vICAgY29uc29sZS5sb2coXCJjbGljazJcIilcbiAgXG4vLyAgICAgICAgIC8vIGQzLnNlbGVjdEFsbCgnI3dvcmxkLW1hcCA+IHBhdGgnKVxuLy8gICAgICAgICAvLyAucmVtb3ZlKCk7XG5cbi8vICAgICAgICAgLy8gbWFrZU1hcChzcGVlZCw2MDAwMClcbi8vIH0pXG5cblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1hcFxuICAgICIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTcGxhc2hVaSgpIHtcbiAgICBjb25zdCBzcGxhc2hVaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1wYWdlXCIpWzBdXG5cbiAgICBpZiAoc3BsYXNoVWkuZ2V0QXR0cmlidXRlKFwiaFwiKSA9PT0gXCJ0cnVlXCIpe1xuICAgICAgICBzcGxhc2hVaS5zZXRBdHRyaWJ1dGUoXCJoXCIgLGZhbHNlKVxuICAgIH1cbiAgICBlbHNle1xuICAgIHNwbGFzaFVpLnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUcmFja2luZ1VpKCkge1xuICAgIGNvbnN0IHRyYWNrVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJhY2tpbmctcGFnZVwiKVswXVxuXG4gICAgaWYgKHRyYWNrVWkuZ2V0QXR0cmlidXRlKFwiaFwiKSA9PT0gXCJ0cnVlXCIpe1xuXG4gICAgICAgIHRyYWNrVWkuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgXG4gICAgICAgIHRyYWNrVWkuc2V0QXR0cmlidXRlKFwiaFwiICx0cnVlKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGVwdGgoKSB7XG4gICAgY29uc3QgZGVwdGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVwdGgtcGFyZW50XCIpWzBdXG5cbiAgICBpZiAoZGVwdGguZ2V0QXR0cmlidXRlKFwiaFwiKSA9PT0gXCJ0cnVlXCIpe1xuXG4gICAgICAgIGRlcHRoLnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFxuICAgICAgICBkZXB0aC5zZXRBdHRyaWJ1dGUoXCJoXCIgLHRydWUpXG4gICAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gem9vbShvY2Vhbixwcm9qZWN0aW9uLHBhdGgpIHtcblxuLy8gICAgIGQzLnRyYW5zaXRpb24oKVxuLy8gICAgIC8vIC5kZWxheSgyNTApXG4vLyAgICAgLmR1cmF0aW9uKDM1MDApXG4vLyAgICAgLnR3ZWVuKFwicm90YXRlXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgICBjb25zdCBwb2ludCA9IFstMTEyLjQwNywyOC4xMDg3XTtcbi8vICAgICAgY29uc3Qgcm90YXRhdGlvbkdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wb2ludFswXSwgLXBvaW50WzFdXSk7XG4gICAgIFxuLy8gICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuLy8gICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUocm90YXRhdGlvbkdyYWRpZW50KHQpKTtcbi8vICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4vLyAgICAgICB9O1xuLy8gICAgIH0pXG5cblxuLy8gZDMudHJhbnNpdGlvbigpXG4vLyAuZGVsYXkoMjUwMClcbi8vIC5kdXJhdGlvbigxMDAwKVxuLy8gICAgIC50d2VlbihcInpvb21cIixmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb25zdCBwb2ludCA9IFstMTEyLjQwNywyOC4xMDg3XTtcbi8vICAgICAgICAgY29uc3Qgcm90YXRhdGlvbkdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wb2ludFswXSwgLXBvaW50WzFdXSk7XG4vLyAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDYwMDAwKVxuLy8gICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuLy8gICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUocm90YXRhdGlvbkdyYWRpZW50KHQpKTtcbi8vICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbi8vICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuLy8gICAgICAgICB9O1xuLy8gICAgIH0pXG5cblxuXG4vLyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHpvb20ob2NlYW4scHJvamVjdGlvbixwYXRoKSB7XG5cbiAgICBjb25zdCB0d2l6emxlTG9jayA9IHt9O1xuICAgIGNvbnN0IHBsb25rTG9jayA9IHt9O1xuXG4gICAgb2NlYW5cbiAgICAgICAgLmNhbGwocm90YXRlLDM1MDAscGF0aClcbiAgICAgICAgLmNhbGwoem9vbUluLCA0MDAwLHBhdGgpXG5cblxuICAgIGZ1bmN0aW9uIHJvdGF0ZShzcGFjZSwgZHVyYXRpb24scGF0aCkge1xuICAgICAgICBkMy5zZWxlY3QodHdpenpsZUxvY2spLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAgICAgLnR3ZWVuKFwicm90YXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gWy0xMTIuMTA3LDI3LjkwODddO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4gICAgICAgICAgICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21JbihzcGFjZSwgZHVyYXRpb24scGF0aCkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHBsb25rTG9jaykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cEluKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAgICAgICAudHdlZW4oXCJ6b29tXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVHcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24uc2NhbGUoKSwgNDAwMDApIC8vcHJldiA2MDAwMFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbi5zY2FsZShzY2FsZUdyYWRpZW50KHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgICAgICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6b29tT3V0KG9jZWFuLHByb2plY3Rpb24scGF0aCkge1xuICBcbiAgICAgICAgZDMudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLnR3ZWVuKFwiem9vbVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVHcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24uc2NhbGUoKSwgNDAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbiAgICAgICAgICAgICAgICAgICAgb2NlYW4uYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICBcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uKHRlc3QpXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVUcmFuc2l0aW9uKG9jZWFuLHByb2plY3Rpb24scGF0aCl7XG4gICAgdG9nZ2xlU3BsYXNoVWkoKVxuICAgIHpvb20ob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgIHNldFRpbWVvdXQoIHRvZ2dsZVRyYWNraW5nVWksIDQwMDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpe1xuICAgIHRvZ2dsZVRyYWNraW5nVWkoKVxuICAgIHpvb21PdXQob2NlYW4scHJvamVjdGlvbixwYXRoKVxuICAgIHNldFRpbWVvdXQodG9nZ2xlU3BsYXNoVWksIDEwMDApXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==