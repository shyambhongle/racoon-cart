import React,{Component} from 'react';
import './piechart.css';
import * as d3 from 'd3';



class PieChart extends Component {
  state={
    width:window.innerWidth,
    height:window.innerHeight,
    data:this.props.data
  }

    componentDidMount() {
      this.drawChart()
      window.addEventListener("resize", this.updateDimensions);
    }

    componentWillReceiveProps(props){
      this.setState({
        data:props.data
      },()=>{
        this.drawChart()
      })
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
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = (this.state.width - margin.right - margin.left)/3,
    height = (this.state.height - margin.top - margin.bottom),
    radius = width/2;

// color range
var color = d3.scaleOrdinal()
    .range(["#FF3E30", "#F7B539", "#179C52"]);


var arc2 = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

// arc for the labels position
var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

// generate pie chart and donut chart
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.count; });


// define the svg donut chart
var svg2 = d3.select("#piechart").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
const data=[
  {fruit:"Mumbai",count:this.state.data.Mumbai},
  {fruit:"Pune",count:this.state.data.Pune},
  {fruit:"Banglore",count:this.state.data.Banglore}]


    // parse data
    data.forEach(function(d) {
        d.count = +d.count
    })


    // "g element is a container used to group other SVG elements"
  var g2 = svg2.selectAll(".arc2")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc2");

   // append path
  g2.append("path")
      .attr("d", arc2)
      .style("fill", function(d) { return color(d.data.fruit); })
    .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut);

   // append text
  g2.append("text")
    .transition()
      .ease(d3.easeLinear)
      .duration(2000)
    .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data.fruit; });




function tweenDonut(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc2(i(t)); };
}
  }

    render() {
      return  (
        <div id="piechart">
          <div className="piechart-direction">
            Number of Orders by cities.
          </div>
        </div>
      )
    }
  }


export default PieChart;
