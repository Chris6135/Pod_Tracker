

export const renderDepth = (data,speed) =>{
    const svg = d3.select('#depth-graph')
    const xValue = d => d.timestamp1;
    const xLabel = "Time";
    const yValue = d => d.depth;
    const yLabel = "depth";
    // const margin = { left: 120, right: 30, top: 20, bottom: 120 };
    const margin = { left: 40, right: 0, top: 0, bottom: 0 };


    const width = svg.attr('width')
    const height = svg.attr('height')
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
      const xAxisG = g.append('g')
          // .attr('transform', `translate(0, ${innerHeight})`);
      const yAxisG = g.append('g');

      xAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('x', innerWidth / 2)
          .attr('y', 100)
          .text(xLabel);

      yAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('x', -innerHeight / 2)
          .attr('y', -40)
          .attr('transform', `rotate(-90)`)
          .style('text-anchor', 'middle')
          .text(yLabel);
          
          const xScale = d3.scaleTime()
          
          const yScale = d3.scaleLinear();
          
          const startDate = data[0].timestamp1;
          const finishDate = data[data.length - 1].timestamp1; 


            const xAxis = d3.axisBottom()
            .scale(xScale)
            .tickPadding(20)
            // .ticks(d3.utcMinute.every(60))
            //   .tickValues(d3.timeMinutes(startDate, finishDate,5))
            .tickSize(-innerHeight);
          
          
          const yAxis = d3.axisLeft()
          .scale(yScale)
          .ticks(5)
          .tickPadding(15)
          .tickSize(-innerWidth)
          
          
          const nested = d3.nest()
          .key( function(d){
              return d.whaleId
            })
        .entries(data)
        ;
        console.log(nested)
        
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


    //  g.selectAll('circle').data(data)
    //    .enter().append('circle')
    //      .attr('cx', (d) =>  xScale(xValue(d)))
    //      .attr('cy', d => yScale(yValue(d)))
    //      .attr('fill-opacity', 0.6)
    //      .attr('r', 8);

     xAxisG.call(xAxis);
     yAxisG.call(yAxis);
      };