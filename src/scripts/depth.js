

export const renderDepth = (data,speed) =>{
    const svg = d3.select('#depth-graph')
    const xValue = d => d.timestamp1;
    const yValue = d => d.depth;
    const yLabel = "Depth-(Hdop)";
    const margin = { left:60, right: 10, top: 10, bottom: 10 };


    const width = svg.attr('width')
    const height = svg.attr('height')
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
    const yAxisG = g.append('g');

      yAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('x', -innerHeight / 2)
          .attr('y', -40)
          .attr('transform', `rotate(-90)`)
          .style('text-anchor', 'middle')
          .style("fill", "black")
          .text(yLabel);
          
          const xScale = d3.scaleTime()
          
          const yScale = d3.scaleLinear();
          
          const yAxis = d3.axisLeft()
          .scale(yScale)
          .ticks(10)
          .tickPadding(10)
          .tickSize(-innerWidth)
          
        
        xScale
        .domain(d3.extent(data, xValue))
        .range([0, innerWidth])
        .nice();
        
        yScale
        .domain(d3.extent(data, yValue))
        .range([0, innerHeight])
        .nice();

   const path = svg.append("path")
    .attr('transform', `translate(${margin.left},${margin.top})`)
    .datum(data)
    .attr("fill", "none")
    .attr("class", "line")
    .attr("stroke", "blue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return xScale(xValue(d)) })
      .y(function(d) { return yScale(yValue(d)) })
      )

      var totalLength = path.node().getTotalLength();

      path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition() 
      .duration(speed) 
      .ease(d3.easeLinear) 
      .attr("stroke-dashoffset", 0);

     yAxisG.call(yAxis);
      };