
import makeMap from "./scripts/makeMap"
import {drawGlobe, enableRotation, makeGlobe} from "./scripts/makeGlobe"

const width = 500;
const height = 500

let speed= 100000
let scale = 500 //cant figure out how to get the transform to work
// let scale = 60000;
const config = {
    speed: 0.005,
    verticalTilt: -10,
    horizontalTilt: 0
  }
 

d3.select('#world-map')
    .attr("width" ,"100vw")
    .attr("height", "100vh")
    .attr("style", "outline: thin solid black")


d3.select('#depth-graph')
    .attr("width" ,width)
    .attr("height", height)
    .attr("style", "outline: thin solid black")
    
// d3.select('#location-graph')
//     .attr("width" ,width)
//     .attr("height", height)
//     .attr("style", "outline: thin solid black")





document.addEventListener("DOMContentLoaded", () => {
makeGlobe()
})