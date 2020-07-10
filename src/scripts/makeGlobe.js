import * as transition from "./transition.js"

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
    }   


        
            

export function enableRotation() {
    const svg = d3.select('#world-map')


  let a = d3.timer(function (elapsed) {
        projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
        svg.selectAll("path").attr("d", path);
    });

    d3.select("#track").on("click", ()=>{
            const target = [-112.407,28.1087];
            // const zoomSettings = {
            //     duration: 1000,
            //     ease: d3.easeCubicOut,
            //     zoomLevel: 5
            // }

            const zoom = d3.zoom()
            .scaleExtent([1, 40])
            .on("zoom", zoomed);

            function zoomed() {
                g.attr("transform", d3.event.transform);
              }
      

            
              const width = +svg.style("width").slice(0,-2)
              const height = +svg.style("height").slice(0,-2)
        

        console.log("stop")
        a.stop()
        transition.removeSplashUi()
        // transition.addTrackingUi()

        d3.transition()
        .delay(250)
        .duration(3500)
        .tween("rotate", function() {
         const point = [-112.407,28.1087];
         const rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
         const scaleGradient = d3.interpolate(projection.scale(), 60000)
         
         return function(t) {
             projection.rotate(rotatationGradient(t));
             projection.scale(scaleGradient(t))
            ocean.attr("d", path);
          };
        })
        
    })
}     

export function makeGlobe(){
    drawGlobe()
    enableRotation()
}
