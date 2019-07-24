import React,{Component} from 'react';
import './linearchart.css';
import * as d3 from 'd3';



class LinearChart extends Component {
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
    const data = [
      {date:"23-Apr-12",close:"3"},
      {date:"25-Apr-12",close:"5"},
      {date:"26-Apr-12",close:"7"},
      {date:"27-Apr-12",close:"7"},
      {date:"28-Apr-12",close:"3"},
      {date:"29-Apr-12",close:"8"},
      {date:"30-Apr-12",close:"2"},
      {date:"1-May-12",close:"4"},
      {date:"2-May-12",close:"5"},
      {date:"3-May-12",close:"5"},
      {date:"4-May-12",close:"3"},
      {date:"5-May-12",close:"7"},
    ]

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = (this.state.width - margin.left - margin.right)/1.5,
    height = (this.state.height - margin.top - margin.bottom)/1.5;

    // parse the date / time
    var parseTime = d3.timeParse("%d-%b-%y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line
    var valueline = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#linearGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");


    // format the data
      data.forEach(function(d) {
          d.date = parseTime(d.date);
          d.close = +d.close;
      });

      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.close; })]);

      // Add the valueline path.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", valueline);

      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y));


    var lineAndDots = svg.append("g")
    		.attr("class", "line-and-dots")


    lineAndDots.selectAll("line-circle")
    		.data(data)
    	   .enter().append("circle")
        .attr("class", "data-circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.close); });

      }

    render() {

      return  (
        <div id="linearGraph"></div>
      )
    }
  }


export default LinearChart;
