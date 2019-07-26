import React,{Component} from 'react';
import './barchart.css';
import * as d3 from 'd3';



class BarChart extends Component {
  state={
    width:window.innerWidth,
    height:window.innerHeight
  }

    componentDidMount() {
      this.drawChart()
      window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions=()=>{
      this.setState({
        width:window.innerWidth,
        height:window.innerHeight
      })
    }

  drawChart=()=>{

    // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 90},
    width = 600 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;


// append the svg object to the body of the page
var svg = d3.select("#barchart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var dataSet=[
    {"Title": "Cocunut Oil ", "Order": 20},
    {"Title": "Ashirvad ", "Order": 15},
    {"Title": "HMT Rice ", "Order": 4},
    {"Title": "Everest Masala", "Order": 10},
    {"Title": "Red Label Tea ", "Order": 8}
]
var data=dataSet.sort(function(a, b) { return b.Order - a.Order; });
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.Order; })])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.Title; }))
    .padding(.2);
  svg.append("g")
    .call(d3.axisLeft(y))

  //Bars
  svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.Title); })
    .attr("width", function(d) { return x(d.Order); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#69b3a2")


    // .attr("x", function(d) { return x(d.Title); })
    // .attr("y", function(d) { return y(d.Order); })
    // .attr("width", x.bandwidth())
    // .attr("height", function(d) { return height - y(d.Order); })
    // .attr("fill", "#69b3a2")


  }
    render() {
      return  (
        <div id="barchart"></div>
      )
    }
  }


export default BarChart;
