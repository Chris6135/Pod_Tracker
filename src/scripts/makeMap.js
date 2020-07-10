import "../styles/index.scss";
import {renderDepth} from "./depth"


 const makeMap = (speed,scale,data) =>{
    console.log("built")

    
    d3.select("#speed-down").on("click", ()=>{
        console.log("down")
        speed = 10000000
        console.log(speed)
    
    })

    const svg = d3.select('#world-map')
    const g = svg.append("g")

    function zoomed() {
    g.attr("transform", d3.event.transform);
    }  

    const zoom = d3.zoom()
    .scaleExtent([1, 600000])
    .on("zoom", zoomed);
    svg.call(zoom);      

    d3.queue()
    .defer(d3.json, "./ne_110m_ocean.json")
    .await(ready)

    const projection = d3.geoMercator()
        .scale(scale)
        .center([-112.407,28.1087])
        
    const path = d3.geoPath()
    .projection(projection)

            
            
    function ready (error,data){
      const ocean = topojson.feature(data, data.objects.ne_110m_ocean).features

      console.log(ocean)

      svg.selectAll(".ocean")
          .data(ocean)
          .enter().append("path")
          .attr("class", "ocean")
          .attr("d", path)
          .attr("fill","#070C58")


      d3.csv('./test.csv', function(data){
          data.forEach(d => {
          d.depth = +d.hdop;
          d.timestamp1 = new Date(d.timestamp);
          d.locationLong = +d.locationLong 
          d.locationLat = +d.locationLat
          

      d3.select("#start").on("click", ()=>{
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
      .duration(speed) 
      .ease(d3.easeLinear) 
      .attr("stroke-dashoffset", 0);

      renderDepth(data, speed)
      })

      d3.select("#reset").on("click", ()=>{
          d3.selectAll(".line").remove()
          console.log("reset")
          console.log(speed)
      })
        
  d3.select("#speed-up").on("click", ()=>{

  // const svg = d3.select('#world-map')

  // const projection = d3.geoMercator()
  // .scale(scale)
  // .center([-112.407,28.1087])

        console.log("click") 

        const x = projection([-112.407,28.1087])[0];
        const y = projection([-112.407,28.1087])[1];
        let newScale = 600000

        svg.transition().duration(2500).call(
            zoom.transform,
            d3.zoomIdentity.scale(newScale).translate(-x, -y));

        })
      });
    })
  }
}


//  d3.select("#speed-up").on("click", ()=>{

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


export default makeMap
    