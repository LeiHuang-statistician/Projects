function pagetitecolorbar(barmin, barmax,pagetitle){
  var rmin=barmin;
  var rmax=barmax;

  var myColor = d3.scaleSequential()
  .interpolator(colortheme)
  .domain([barmin,barmax])
  var colors=[]
  for (var i=rmin;i<=rmax;i++){
      color=myColor(i)
      colors.push(color)
  }

  var svgc=d3.select("#colorbar")
    var grad = svgc.append('defs')
      .append('linearGradient')
      .attr('id', 'grad')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '0%');

    grad.selectAll('stop')
      .data(colors)
      .enter()
      .append('stop')
      .style('stop-color', function(d){ return d; })
      .attr('offset', function(d,i){
        return 100 * (i / (colors.length - 1)) + '%';
      })

      svgc.append('rect')
      .attr('id','colorrect')
      .attr('width', 500)
      .attr('height',15)  /*panel height*/
      .style('fill', 'url(#grad')
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .attr('transform', `translate(10,0)`)

    var xA = d3.scaleLinear()
      .domain([barmin, barmax])
      .range([0, 500])    /*right axis height*/
      .nice()
    var xAxis = d3.axisBottom(xA)
      .ticks(5)
      .tickSize(0)
      .tickFormat(x =>(x/100).toFixed(1))

    xAxidsG=svgc.append('g')
      .attr("id", "xAxidsG")
      .attr("class", "xAxidsG")
      .style("font-size",12)
      .attr('transform', `translate(10,15)`)
      .call(xAxis)
      .select(".domain").remove()


    // Add title to page
    var fortitle=pagetitle.toString().split('\n')
    console.log(fortitle)
    const til=d3.select('#title')
    const til2=til.append('g')
       .append('p')
       .attr("id", "tiltext")
        .append("html")
        .html(pagetitle)
        .attr('transform', function(d,i) {return `translate(0,100)`})
        .style('font-weight', 600)
        .style('font-family','Helvetica')
        .style("text-anchor", "middle")
}