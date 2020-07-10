import * as transition from "./transition.js"
import {renderDepth} from "./depth"

const svg = d3.select('#world-map')
console.log(+svg.style("width").slice(0,-2))

let projection = d3.geoOrthographic()

const initialScale = projection.scale(400);

const path = d3.geoPath().projection(projection);

const config = {
    speed: .005,
    verticalTilt: -10,
    horizontalTilt: 0
}

let ocean

const g = svg.append("g")

export function drawGlobe(speed = 100000) {  
    const width = +svg.style("width").slice(0,-2)
    const height = +svg.style("height").slice(0,-2)
    
    projection
        .translate([width /2, height /2])
        .rotate([82.407])

    // const background = document.getElementById("world-background")

    // background
    //     .translate([width /2, height /2])

    d3.queue()
        .defer(d3.json, './ne_110m_ocean.json')          
        .await((error, data, locationData) => {
           ocean = g.selectAll(".segment")
                .data(topojson.feature(data, data.objects.ne_110m_ocean).features)
                .enter().append("path")
                .attr("class", "segment")
                .attr("d", path)
                .style("fill", () => '#070C58')
        });
        console.log(projection)
    }   


        
            

export function enableRotation() {
    const svg = d3.select('#world-map')


  let a = d3.timer(function (elapsed) {
        projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
        svg.selectAll("path").attr("d", path);
    });

    d3.select("#track").on("click", ()=>{

        console.log("stop")
        a.stop()
        transition.executeTransition(ocean,projection,path)
    })

    
    d3.csv('./test.csv', function(data){
        data.forEach(d => {
        d.depth = +d.hdop;
        d.timestamp1 = new Date(d.timestamp);
        d.locationLong = +d.locationLong 
        d.locationLat = +d.locationLat
        

    d3.select("#start").on("click", ()=>{
        console.log("click")


    const linePath = svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("class", "line")
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return projection(
            [d.locationLong, d.locationLat])[0]})
        .y(function(d) { return projection(
            [d.locationLong, d.locationLat])[1]})
        .curve(d3.curveCardinal));

    var totalLength = linePath.node().getTotalLength();

    linePath
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition() 
    .duration(12000) 
    .ease(d3.easeLinear) 
    .attr("stroke-dashoffset", 0);

    renderDepth(data, 12000)



         })

        //  d3.select("#reset").on("click", ()=>{
        //     d3.selectAll(".line").remove()
        //     console.log("reset")
        //     console.log(speed)
        // })

        d3.select("#reset").on("click", ()=>{
            transition.zoomOut(ocean,projection,path)
            a = d3.timer(function (elapsed) {
                projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
                svg.selectAll("path").attr("d", path);
            });
        })
    })
})
}

export function makeGlobe(){
    drawGlobe()
    enableRotation()
}
