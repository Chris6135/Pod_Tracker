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
    return d.timestamp;
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
  xScale.domain(d3.extent(data[0].values, xValue)).range([0, innerWidth]).nice();
  yScale.domain(d3.extent(data[0].values, yValue)).range([0, innerHeight]).nice(); //  const path = svg.append("path")
  // .attr('transform', `translate(${margin.left},${margin.top})`)
  //   .datum(data)
  //   .attr("fill", "none")
  //   .attr("class", "line")
  //   .attr("stroke", "blue")
  //   .attr("stroke-width", 1.5)
  // .attr("d", d3.line()
  //   .x(function(d) { return xScale(xValue(d)) })
  //   .y(function(d) { return yScale(yValue(d)) })
  //   )
  // var totalLength = path.node().getTotalLength();
  // path
  // .attr("stroke-dasharray", totalLength + " " + totalLength)
  // .attr("stroke-dashoffset", totalLength)
  // .transition() 
  // .duration(speed) 
  // .ease(d3.easeLinear) 
  // .attr("stroke-dashoffset", 0);

  data.forEach(function (data, i) {
    var path = svg.append("path").attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")")).datum(data.values).attr("id", data.key + "-depth").attr("fill", "none").attr("stroke", "blue").attr("class", "line").attr("opacity", "0.5").attr("stroke-width", 1.5).attr("d", d3.line().x(function (d) {
      debugger;
      return xScale(xValue(d));
    }).y(function (d) {
      return yScale(yValue(d));
    }));
    var totalLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(speed).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
  });
  var whale = document.querySelector("#Phil");
  whale.setAttribute("opacity", "1");
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
      d.timestamp = new Date(d.timestamp);
      d.locationLong = +d.locationLong;
      d.locationLat = +d.locationLat;
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
          Object(_depth__WEBPACK_IMPORTED_MODULE_1__["renderDepth"])(whales, drawSpeed);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RlcHRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21ha2VHbG9iZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWtlTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJzY2FsZSIsImNvbmZpZyIsInZlcnRpY2FsVGlsdCIsImhvcml6b250YWxUaWx0IiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUdsb2JlIiwicmVuZGVyRGVwdGgiLCJkYXRhIiwic3ZnIiwieFZhbHVlIiwiZCIsInRpbWVzdGFtcCIsInlWYWx1ZSIsImRlcHRoIiwieUxhYmVsIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZyIsImFwcGVuZCIsInlBeGlzRyIsInN0eWxlIiwidGV4dCIsInhTY2FsZSIsInNjYWxlVGltZSIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwidGlja1BhZGRpbmciLCJ0aWNrU2l6ZSIsImRvbWFpbiIsImV4dGVudCIsInZhbHVlcyIsInJhbmdlIiwibmljZSIsImZvckVhY2giLCJpIiwicGF0aCIsImRhdHVtIiwia2V5IiwibGluZSIsIngiLCJ5IiwidG90YWxMZW5ndGgiLCJub2RlIiwiZ2V0VG90YWxMZW5ndGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZWFzZUxpbmVhciIsIndoYWxlIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImNhbGwiLCJwcm9qZWN0aW9uIiwiZ2VvT3J0aG9ncmFwaGljIiwiaW5pdGlhbFNjYWxlIiwiZ2VvUGF0aCIsIm9jZWFuIiwicGFyZW50IiwiZHJhd1NwZWVkIiwicGF0aFRvZ2dsZSIsImRyYXdHbG9iZSIsInNsaWNlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicXVldWUiLCJkZWZlciIsImpzb24iLCJhd2FpdCIsImVycm9yIiwibG9jYXRpb25EYXRhIiwic2VsZWN0QWxsIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsIm5lXzExMG1fb2NlYW4iLCJmZWF0dXJlcyIsImVudGVyIiwiZW5hYmxlUm90YXRpb24iLCJhIiwidGltZXIiLCJlbGFwc2VkIiwib24iLCJjb25zb2xlIiwibG9nIiwic3RvcCIsImNzdiIsImhkb3AiLCJEYXRlIiwibG9jYXRpb25Mb25nIiwibG9jYXRpb25MYXQiLCJuYW1lIiwid2hhbGVzIiwibmVzdCIsImVudHJpZXMiLCJsaW5lcyIsImN1cnZlIiwiY3VydmVDYXJkaW5hbCIsInJlbW92ZSIsIndoYWxlTGlzdCIsImdldEF0dHJpYnV0ZSIsImxvYWRlciIsIm1ha2VNYXAiLCJ6b29tZWQiLCJldmVudCIsInRyYW5zZm9ybSIsInpvb20iLCJzY2FsZUV4dGVudCIsInJlYWR5IiwiZ2VvTWVyY2F0b3IiLCJjZW50ZXIiLCJ0aW1lc3RhbXAxIiwibGluZVBhdGgiLCJuZXdTY2FsZSIsInpvb21JZGVudGl0eSIsInRvZ2dsZVNwbGFzaFVpIiwic3BsYXNoVWkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlVHJhY2tpbmdVaSIsInRyYWNrVWkiLCJ0b2dnbGVEZXB0aCIsInR3aXp6bGVMb2NrIiwicGxvbmtMb2NrIiwiem9vbUluIiwic3BhY2UiLCJ0d2VlbiIsInBvaW50Iiwicm90YXRhdGlvbkdyYWRpZW50IiwiaW50ZXJwb2xhdGUiLCJ0IiwiZWFzZUV4cEluIiwic2NhbGVHcmFkaWVudCIsInpvb21PdXQiLCJleGVjdXRlVHJh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SkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgbWFrZU1hcCBmcm9tIFwiLi9zY3JpcHRzL21ha2VNYXBcIlxuaW1wb3J0IHtkcmF3R2xvYmUsIGVuYWJsZVJvdGF0aW9uLCBtYWtlR2xvYmV9IGZyb20gXCIuL3NjcmlwdHMvbWFrZUdsb2JlXCJcblxuY29uc3Qgd2lkdGggPSA1MDA7XG5jb25zdCBoZWlnaHQgPSA1MDBcblxubGV0IHNwZWVkPSAxMDAwMDBcbmxldCBzY2FsZSA9IDUwMCAvL2NhbnQgZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSB0cmFuc2Zvcm0gdG8gd29ya1xuLy8gbGV0IHNjYWxlID0gNjAwMDA7XG5jb25zdCBjb25maWcgPSB7XG4gICAgc3BlZWQ6IDAuMDA1LFxuICAgIHZlcnRpY2FsVGlsdDogLTEwLFxuICAgIGhvcml6b250YWxUaWx0OiAwXG4gIH1cbiBcblxuZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcbiAgICAuYXR0cihcIndpZHRoXCIgLFwiMTAwdndcIilcbiAgICAuYXR0cihcImhlaWdodFwiLCBcIjEwMHZoXCIpXG4gICAgLmF0dHIoXCJzdHlsZVwiLCBcIm91dGxpbmU6IHRoaW4gc29saWQgYmxhY2tcIilcblxuXG5kMy5zZWxlY3QoJyNkZXB0aC1ncmFwaCcpXG4gICAgLmF0dHIoXCJ3aWR0aFwiICx3aWR0aClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgLmF0dHIoXCJzdHlsZVwiLCBcIm91dGxpbmU6IHRoaW4gc29saWQgYmxhY2tcIilcbiAgICBcbi8vIGQzLnNlbGVjdCgnI2xvY2F0aW9uLWdyYXBoJylcbi8vICAgICAuYXR0cihcIndpZHRoXCIgLHdpZHRoKVxuLy8gICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbi8vICAgICAuYXR0cihcInN0eWxlXCIsIFwib3V0bGluZTogdGhpbiBzb2xpZCBibGFja1wiKVxuXG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbm1ha2VHbG9iZSgpO1xuXG59KSIsIlxuXG5leHBvcnQgY29uc3QgcmVuZGVyRGVwdGggPSAoZGF0YSxzcGVlZCkgPT57XG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjZGVwdGgtZ3JhcGgnKVxuICAgIGNvbnN0IHhWYWx1ZSA9IGQgPT4gZC50aW1lc3RhbXA7XG4gICAgY29uc3QgeVZhbHVlID0gZCA9PiBkLmRlcHRoO1xuICAgIGNvbnN0IHlMYWJlbCA9IFwiRGVwdGgtKEhkb3ApXCI7XG4gICAgY29uc3QgbWFyZ2luID0geyBsZWZ0OjYwLCByaWdodDogMTAsIHRvcDogMTAsIGJvdHRvbTogMTAgfTtcblxuXG4gICAgY29uc3Qgd2lkdGggPSBzdmcuYXR0cignd2lkdGgnKVxuICAgIGNvbnN0IGhlaWdodCA9IHN2Zy5hdHRyKCdoZWlnaHQnKVxuICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcbiAgICBjb25zdCB5QXhpc0cgPSBnLmFwcGVuZCgnZycpO1xuXG4gICAgICB5QXhpc0cuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcy1sYWJlbCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAtaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgICAgIC5hdHRyKCd5JywgLTQwKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgcm90YXRlKC05MClgKVxuICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAudGV4dCh5TGFiZWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgIC50aWNrcygxMClcbiAgICAgICAgICAudGlja1BhZGRpbmcoMTApXG4gICAgICAgICAgLnRpY2tTaXplKC1pbm5lcldpZHRoKVxuICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgeFNjYWxlXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGFbMF0udmFsdWVzLCB4VmFsdWUpKVxuICAgICAgICAucmFuZ2UoWzAsIGlubmVyV2lkdGhdKVxuICAgICAgICAubmljZSgpO1xuICAgICAgICBcbiAgICAgICAgeVNjYWxlXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGFbMF0udmFsdWVzLCB5VmFsdWUpKVxuICAgICAgICAucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcbiAgICAgICAgLm5pY2UoKTtcblxuICAvLyAgY29uc3QgcGF0aCA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxuICAvLyAgIC5kYXR1bShkYXRhKVxuICAvLyAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAvLyAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmx1ZVwiKVxuICAvLyAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcbiAgICAvLyAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgLy8gICAueChmdW5jdGlvbihkKSB7IHJldHVybiB4U2NhbGUoeFZhbHVlKGQpKSB9KVxuICAgIC8vICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geVNjYWxlKHlWYWx1ZShkKSkgfSlcbiAgICAvLyAgIClcblxuICAgICAgLy8gdmFyIHRvdGFsTGVuZ3RoID0gcGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgICAgLy8gcGF0aFxuICAgICAgLy8gLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIHRvdGFsTGVuZ3RoICsgXCIgXCIgKyB0b3RhbExlbmd0aClcbiAgICAgIC8vIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAvLyAudHJhbnNpdGlvbigpIFxuICAgICAgLy8gLmR1cmF0aW9uKHNwZWVkKSBcbiAgICAgIC8vIC5lYXNlKGQzLmVhc2VMaW5lYXIpIFxuICAgICAgLy8gLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTtcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSxpKXtcblxuICAgIGxldCBwYXRoID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApXG4gICAgLmRhdHVtKGRhdGEudmFsdWVzKVxuICAgIC5hdHRyKFwiaWRcIiwgZGF0YS5rZXkgKyBcIi1kZXB0aFwiKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuNVwiKVxuICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAueCgoZCkgPT4geyBkZWJ1Z2dlclxuICAgICAgICAgcmV0dXJuIHhTY2FsZSh4VmFsdWUoZCkpIH0pXG4gICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5U2NhbGUoeVZhbHVlKGQpKSB9KVxuICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgIHZhciB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cblxuXG4gICAgICBwYXRoXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgdG90YWxMZW5ndGggKyBcIiBcIiArIHRvdGFsTGVuZ3RoKVxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCB0b3RhbExlbmd0aClcbiAgICAgIC50cmFuc2l0aW9uKCkgXG4gICAgICAuZHVyYXRpb24oc3BlZWQpIFxuICAgICAgLmVhc2UoZDMuZWFzZUxpbmVhcikgXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDApO1xuIH0pXG5cbiBsZXQgd2hhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1BoaWxcIik7XG4gd2hhbGUuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjFcIilcblxuICAgICB5QXhpc0cuY2FsbCh5QXhpcyk7XG4gICAgICB9OyIsImltcG9ydCAqIGFzIHRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiXG5pbXBvcnQge3JlbmRlckRlcHRofSBmcm9tIFwiLi9kZXB0aFwiXG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI3dvcmxkLW1hcCcpXG5cbmxldCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKClcblxuY29uc3QgaW5pdGlhbFNjYWxlID0gcHJvamVjdGlvbi5zY2FsZSg0MDApO1xuXG5jb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBzcGVlZDogLjAwNSxcbiAgICB2ZXJ0aWNhbFRpbHQ6IC0xMCxcbiAgICBob3Jpem9udGFsVGlsdDogMFxufVxuXG5sZXQgb2NlYW5cbmxldCBwYXJlbnRcbmxldCBkcmF3U3BlZWQgPSAxMDAwMDBcblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG5cbmxldCBwYXRoVG9nZ2xlID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dsb2JlKHNwZWVkID0gMTAwMDAwKSB7ICBcbiAgICBjb25zdCB3aWR0aCA9ICtzdmcuc3R5bGUoXCJ3aWR0aFwiKS5zbGljZSgwLC0yKVxuICAgIGNvbnN0IGhlaWdodCA9ICtzdmcuc3R5bGUoXCJoZWlnaHRcIikuc2xpY2UoMCwtMilcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmxkLW1hcFwiKTtcbiAgICBwYXJlbnQuc2V0QXR0cmlidXRlKFwiaFwiLCB0cnVlKVxuICAgIFxuICAgIHByb2plY3Rpb25cbiAgICAgICAgLnRyYW5zbGF0ZShbd2lkdGggLzIsIGhlaWdodCAvMl0pXG4gICAgICAgIC5yb3RhdGUoWzgyLjQwN10pXG5cbiAgICAvLyBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZC1iYWNrZ3JvdW5kXCIpXG5cbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgLy8gICAgIC50cmFuc2xhdGUoW3dpZHRoIC8yLCBoZWlnaHQgLzJdKVxuXG4gICAgZDMucXVldWUoKVxuICAgICAgICAuZGVmZXIoZDMuanNvbiwgJy4vbmVfMTEwbV9vY2Vhbi5qc29uJylcbiAgICAgICAgLmF3YWl0KChlcnJvciwgZGF0YSwgbG9jYXRpb25EYXRhKSA9PiB7XG4gICAgICAgICAgIG9jZWFuID0gZy5zZWxlY3RBbGwoXCIuc2VnbWVudFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VnbWVudFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgKCkgPT4gJyMwNzBDNTgnKVxuICAgICAgICB9KTtcbn0gICBcblxuXG4gICAgICAgIFxuICAgICAgICAgICAgXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVSb3RhdGlvbigpIHtcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuXG5cbiAgbGV0IGEgPSBkMy50aW1lcihmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbY29uZmlnLnNwZWVkICogZWxhcHNlZCAtIDEyMCwgY29uZmlnLnZlcnRpY2FsVGlsdCwgY29uZmlnLmhvcml6b250YWxUaWx0XSk7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgIH0pO1xuXG4gICAgZDMuc2VsZWN0KFwiI3RyYWNrXCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcblxuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BcIilcbiAgICAgICAgYS5zdG9wKClcbiAgICAgICAgdHJhbnNpdGlvbi5leGVjdXRlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpXG4gICAgfSlcblxuICAgIFxuICAgIGQzLmNzdignLi9yYXdfZGF0YS5jc3YnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLmRlcHRoID0gK2QuaGRvcDtcbiAgICAgICAgZC50aW1lc3RhbXAgPSBuZXcgRGF0ZShkLnRpbWVzdGFtcCk7XG4gICAgICAgIGQubG9jYXRpb25Mb25nID0gK2QubG9jYXRpb25Mb25nIFxuICAgICAgICBkLmxvY2F0aW9uTGF0ID0gK2QubG9jYXRpb25MYXRcbiAgICAgICAgZC5uYW1lID0gZC5uYW1lXG5cbiAgICAgICAgY29uc3Qgd2hhbGVzID0gZDMubmVzdCgpXG4gICAgICAgIC5rZXkoZnVuY3Rpb24oZCkge3JldHVybiBkLm5hbWU7fSlcbiAgICAgICAgLmVudHJpZXMoZGF0YSk7XG5cblxuICAgIGQzLnNlbGVjdChcIiNzdGFydFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoVG9nZ2xlKVxuXG4gICAgICBcblxuICAgIGlmKHBhdGhUb2dnbGUpe1xuXG4gICAgICAgIHdoYWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGQsaSl7XG4gICAgICAgICAgIGxldCBsaW5lcyA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgIC5kYXR1bShkLnZhbHVlcylcbiAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBkLmtleSlcbiAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpXG4gICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBcIjAuMVwiKVxuICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgICAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHByb2plY3Rpb24oXG4gICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVswXX0pXG4gICAgICAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgIFtkLmxvY2F0aW9uTG9uZywgZC5sb2NhdGlvbkxhdF0pWzFdfSlcbiAgICAgICAgICAgICAgICAgICAuY3VydmUoZDMuY3VydmVDYXJkaW5hbCkpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgIGxldCB0b3RhbExlbmd0aCA9IGxpbmVzLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuICAgICAgIFxuICBcbiAgICAgICBsaW5lc1xuICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCB0b3RhbExlbmd0aClcbiAgICAgICAudHJhbnNpdGlvbigpIFxuICAgICAgIC5kdXJhdGlvbihkcmF3U3BlZWQpXG4gICAgICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDApO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB3aGFsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUGhpbFwiKTtcbiAgICAgICAgd2hhbGUuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjFcIilcbiAgICAgICAgXG5cbiAgICAgIFxuXG4gICAgICAgIHJlbmRlckRlcHRoKHdoYWxlcywgZHJhd1NwZWVkKVxuICAgICAgICBwYXRoVG9nZ2xlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pXG5cbiBcbiBcbiAgICAgICAgIGQzLnNlbGVjdChcIiNyZXNldFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgICAgcGF0aFRvZ2dsZSA9IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBkMy5zZWxlY3QoXCIjem9vbU91dFwiKS5vbihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICB0cmFuc2l0aW9uLnJldmVyc2VUcmFuc2l0aW9uKG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICAgICAgICAgIGEgPSBkMy50aW1lcihmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKFtjb25maWcuc3BlZWQgKiBlbGFwc2VkIC0gMTIwLCBjb25maWcudmVydGljYWxUaWx0LCBjb25maWcuaG9yaXpvbnRhbFRpbHRdKTtcbiAgICAgICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGF0aFRvZ2dsZSA9IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBkMy5zZWxlY3QoXCIjdmlld0RlcHRoXCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIHRyYW5zaXRpb24udG9nZ2xlRGVwdGgoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNzZWxlY3Qtd2hhbGVcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFwiKVxuICAgICAgICAgICAgbGV0IHdoYWxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hhbGUtc2VsZWN0b3JcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aGFsZUxpc3QpXG5cbiAgICAgICAgICAgIGlmICh3aGFsZUxpc3QuZ2V0QXR0cmlidXRlKFwiaFwiKSA9PT0gXCJ0cnVlXCIpe1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB3aGFsZUxpc3Quc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2hhbGVMaXN0LnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pXG5cbiAgICAgICAgd2hhbGVzLmZvckVhY2goKGQsaSk9PntcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi5cIitkLmtleSkub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCB3aGFsZVxuICAgICAgICAgICAgICAgIHdoYWxlcy5mb3JFYWNoKChkKT0+e1xuICAgICAgICAgICAgICAgICAgICB3aGFsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBkLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIHdoYWxlLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIwLjFcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHdoYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGQua2V5KTtcbiAgICAgICAgICAgICAgICB3aGFsZS5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIFwiMVwiKVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKSA7ICAgIFxuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoXCJoXCIsIHRydWUpXG4gICAgcGFyZW50LnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG59KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUdsb2JlKCl7XG4gICAgZHJhd0dsb2JlKClcbiAgICBlbmFibGVSb3RhdGlvbigpXG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHtyZW5kZXJEZXB0aH0gZnJvbSBcIi4vZGVwdGhcIlxuXG5cbiBjb25zdCBtYWtlTWFwID0gKHNwZWVkLHNjYWxlLGRhdGEpID0+e1xuXG4gICAgXG4gICAgZDMuc2VsZWN0KFwiI3NwZWVkLWRvd25cIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBzcGVlZCA9IDEwMDAwMDAwXG4gICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyN3b3JsZC1tYXAnKVxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0gIFxuXG4gICAgY29uc3Qgem9vbSA9IGQzLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgNjAwMDAwXSlcbiAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgc3ZnLmNhbGwoem9vbSk7ICAgICAgXG5cbiAgICBkMy5xdWV1ZSgpXG4gICAgLmRlZmVyKGQzLmpzb24sIFwiLi9uZV8xMTBtX29jZWFuLmpzb25cIilcbiAgICAuYXdhaXQocmVhZHkpXG5cbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAgICAgICAuc2NhbGUoc2NhbGUpXG4gICAgICAgIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuICAgICAgICBcbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBmdW5jdGlvbiByZWFkeSAoZXJyb3IsZGF0YSl7XG4gICAgICBjb25zdCBvY2VhbiA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLm5lXzExMG1fb2NlYW4pLmZlYXR1cmVzXG5cblxuICAgICAgc3ZnLnNlbGVjdEFsbChcIi5vY2VhblwiKVxuICAgICAgICAgIC5kYXRhKG9jZWFuKVxuICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwib2NlYW5cIilcbiAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIixcIiMwNzBDNThcIilcblxuXG4gICAgICBkMy5jc3YoJy4vdGVzdC5jc3YnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgZC5kZXB0aCA9ICtkLmhkb3A7XG4gICAgICAgICAgZC50aW1lc3RhbXAxID0gbmV3IERhdGUoZC50aW1lc3RhbXApO1xuICAgICAgICAgIGQubG9jYXRpb25Mb25nID0gK2QubG9jYXRpb25Mb25nIFxuICAgICAgICAgIGQubG9jYXRpb25MYXQgPSArZC5sb2NhdGlvbkxhdFxuICAgICAgICAgIFxuXG4gICAgICBkMy5zZWxlY3QoXCIjc3RhcnRcIikub24oXCJjbGlja1wiLCAoKT0+e1xuICAgICAgY29uc3QgbGluZVBhdGggPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiBwcm9qZWN0aW9uKFxuICAgICAgICAgICAgICBbZC5sb2NhdGlvbkxvbmcsIGQubG9jYXRpb25MYXRdKVswXX0pXG4gICAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4gcHJvamVjdGlvbihcbiAgICAgICAgICAgICAgW2QubG9jYXRpb25Mb25nLCBkLmxvY2F0aW9uTGF0XSlbMV19KVxuICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUNhcmRpbmFsKSk7XG5cbiAgICAgICAgICB2YXIgdG90YWxMZW5ndGggPSBsaW5lUGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgICAgbGluZVBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKSBcbiAgICAgIC5kdXJhdGlvbihzcGVlZCkgXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMCk7XG5cbiAgICAgIHJlbmRlckRlcHRoKGRhdGEsIHNwZWVkKVxuICAgICAgfSlcblxuICAgICAgZDMuc2VsZWN0KFwiI3Jlc2V0XCIpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWVkKVxuICAgICAgfSlcbiAgICAgICAgXG4gIGQzLnNlbGVjdChcIiNzcGVlZC11cFwiKS5vbihcImNsaWNrXCIsICgpPT57XG5cbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuICAvLyBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKVxuICAvLyAuc2NhbGUoc2NhbGUpXG4gIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIikgXG5cbiAgICAgICAgY29uc3QgeCA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVswXTtcbiAgICAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbiAgICAgICAgbGV0IG5ld1NjYWxlID0gNjAwMDAwXG5cbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTAwKS5jYWxsKFxuICAgICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBkMy56b29tSWRlbnRpdHkuc2NhbGUobmV3U2NhbGUpLnRyYW5zbGF0ZSgteCwgLXkpKTtcblxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufVxuXG5cbi8vICBkMy5zZWxlY3QoXCIjc3BlZWQtdXBcIikub24oXCJjbGlja1wiLCAoKT0+e1xuXG4vLyAgICAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjd29ybGQtbWFwJylcblxuLy8gICAgIC8vIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4vLyAgICAgLy8gLnNjYWxlKHNjYWxlKVxuLy8gICAgIC8vIC5jZW50ZXIoWy0xMTIuNDA3LDI4LjEwODddKVxuXG5cblxuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja1wiKVxuXG4vLyAgICAgLy8gY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgXG4vLyAgICAgLy8gZnVuY3Rpb24gem9vbWVkKCkge1xuLy8gICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuLy8gICAgIC8vIH0gIFxuXG4gICAgXG4vLyAgICAgICBjb25zdCB6b29tID0gZDMuem9vbSgpXG4vLyAgICAgICAuc2NhbGVFeHRlbnQoWzEsIDYwMDAwMF0pXG4vLyAgICAgICAub24oXCJ6b29tXCIsIHpvb21lZCk7XG4vLyAgICAgICBzdmcuY2FsbCh6b29tKTsgICAgICBcblxuLy8gICAgIGNvbnN0IHggPSBwcm9qZWN0aW9uKFstMTEyLjQwNywyOC4xMDg3XSlbMF07XG4vLyAgICAgY29uc3QgeSA9IHByb2plY3Rpb24oWy0xMTIuNDA3LDI4LjEwODddKVsxXTtcbi8vICAgICBsZXQgbmV3U2NhbGUgPSA2MDAwMDBcblxuLy8gICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjUwMCkuY2FsbChcbi8vICAgICAgICAgem9vbS50cmFuc2Zvcm0sXG4vLyAgICAgICAgIGQzLnpvb21JZGVudGl0eS5zY2FsZShuZXdTY2FsZSkudHJhbnNsYXRlKC14LCAteSkpO1xuXG4vLyAgIGNvbnNvbGUubG9nKFwiY2xpY2syXCIpXG4gIFxuLy8gICAgICAgICAvLyBkMy5zZWxlY3RBbGwoJyN3b3JsZC1tYXAgPiBwYXRoJylcbi8vICAgICAgICAgLy8gLnJlbW92ZSgpO1xuXG4vLyAgICAgICAgIC8vIG1ha2VNYXAoc3BlZWQsNjAwMDApXG4vLyB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXBcbiAgICAiLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3BsYXNoVWkoKSB7XG4gICAgY29uc3Qgc3BsYXNoVWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtcGFnZVwiKVswXVxuXG4gICAgaWYgKHNwbGFzaFVpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgc3BsYXNoVWkuc2V0QXR0cmlidXRlKFwiaFwiICxmYWxzZSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICBzcGxhc2hVaS5zZXRBdHRyaWJ1dGUoXCJoXCIgLHRydWUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVHJhY2tpbmdVaSgpIHtcbiAgICBjb25zdCB0cmFja1VpID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYWNraW5nLXBhZ2VcIilbMF1cblxuICAgIGlmICh0cmFja1VpLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcblxuICAgICAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsZmFsc2UpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIFxuICAgICAgICB0cmFja1VpLnNldEF0dHJpYnV0ZShcImhcIiAsdHJ1ZSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURlcHRoKCkge1xuICAgIGNvbnN0IGRlcHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlcHRoLXBhcmVudFwiKVswXVxuXG4gICAgaWYgKGRlcHRoLmdldEF0dHJpYnV0ZShcImhcIikgPT09IFwidHJ1ZVwiKXtcblxuICAgICAgICBkZXB0aC5zZXRBdHRyaWJ1dGUoXCJoXCIgLGZhbHNlKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBcbiAgICAgICAgZGVwdGguc2V0QXR0cmlidXRlKFwiaFwiICx0cnVlKVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHpvb20ob2NlYW4scHJvamVjdGlvbixwYXRoKSB7XG5cbi8vICAgICBkMy50cmFuc2l0aW9uKClcbi8vICAgICAvLyAuZGVsYXkoMjUwKVxuLy8gICAgIC5kdXJhdGlvbigzNTAwKVxuLy8gICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbi8vICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi40MDcsMjguMTA4N107XG4vLyAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuICAgICBcbi8vICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4vLyAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuLy8gICAgICAgfTtcbi8vICAgICB9KVxuXG5cbi8vIGQzLnRyYW5zaXRpb24oKVxuLy8gLmRlbGF5KDI1MDApXG4vLyAuZHVyYXRpb24oMTAwMClcbi8vICAgICAudHdlZW4oXCJ6b29tXCIsZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29uc3QgcG9pbnQgPSBbLTExMi40MDcsMjguMTA4N107XG4vLyAgICAgICAgIGNvbnN0IHJvdGF0YXRpb25HcmFkaWVudCA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcG9pbnRbMF0sIC1wb2ludFsxXV0pO1xuLy8gICAgICAgICBjb25zdCBzY2FsZUdyYWRpZW50ID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5zY2FsZSgpLCA2MDAwMClcbi8vICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbi8vICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHJvdGF0YXRpb25HcmFkaWVudCh0KSk7XG4vLyAgICAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKHNjYWxlR3JhZGllbnQodCkpXG4vLyAgICAgICAgICAgICBvY2Vhbi5hdHRyKFwiZFwiLCBwYXRoKTtcbi8vICAgICAgICAgfTtcbi8vICAgICB9KVxuXG5cblxuLy8gfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aCkge1xuXG4gICAgY29uc3QgdHdpenpsZUxvY2sgPSB7fTtcbiAgICBjb25zdCBwbG9ua0xvY2sgPSB7fTtcblxuICAgIG9jZWFuXG4gICAgICAgIC5jYWxsKHJvdGF0ZSwzNTAwLHBhdGgpXG4gICAgICAgIC5jYWxsKHpvb21JbiwgNDAwMCxwYXRoKVxuXG5cbiAgICBmdW5jdGlvbiByb3RhdGUoc3BhY2UsIGR1cmF0aW9uLHBhdGgpIHtcbiAgICAgICAgZDMuc2VsZWN0KHR3aXp6bGVMb2NrKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAgIC50d2VlbihcInJvdGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IFstMTEyLjEwNywyNy45MDg3XTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGF0aW9uR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXBvaW50WzBdLCAtcG9pbnRbMV1dKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyb3RhdGF0aW9uR3JhZGllbnQodCkpO1xuICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tSW4oc3BhY2UsIGR1cmF0aW9uLHBhdGgpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdChwbG9ua0xvY2spLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHBJbilcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgLnR3ZWVuKFwiem9vbVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDQwMDAwKSAvL3ByZXYgNjAwMDBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGVHcmFkaWVudCh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gem9vbU91dChvY2Vhbixwcm9qZWN0aW9uLHBhdGgpIHtcbiAgXG4gICAgICAgIGQzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC50d2VlbihcInpvb21cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlR3JhZGllbnQgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnNjYWxlKCksIDQwMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKHNjYWxlR3JhZGllbnQodCkpXG4gICAgICAgICAgICAgICAgICAgIG9jZWFuLmF0dHIoXCJkXCIsIHBhdGgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbih0ZXN0KVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlVHJhbnNpdGlvbihvY2Vhbixwcm9qZWN0aW9uLHBhdGgpe1xuICAgIHRvZ2dsZVNwbGFzaFVpKClcbiAgICB6b29tKG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICBzZXRUaW1lb3V0KCB0b2dnbGVUcmFja2luZ1VpLCA0MDAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVRyYW5zaXRpb24ob2NlYW4scHJvamVjdGlvbixwYXRoKXtcbiAgICB0b2dnbGVUcmFja2luZ1VpKClcbiAgICB6b29tT3V0KG9jZWFuLHByb2plY3Rpb24scGF0aClcbiAgICBzZXRUaW1lb3V0KHRvZ2dsZVNwbGFzaFVpLCAxMDAwKVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=