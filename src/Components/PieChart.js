import React, {Component} from 'react';
import {View, StyleSheet, ART} from 'react-native';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
const {Surface, Group, Shape} = ART;


export default class PieChart<props> extends Component {

  constructor(){
    super();

    this.pieRadius = 20;

    this.generateArcs = this.generateArcs.bind(this);
    this.generatePath = this.generatePath.bind(this);
  }



  // generates value for Pie chart shape
  generateArcs(){
    var arcs = shape.pie().value((item) => item.number)(this.props.data);
    console.log(arcs);
    return arcs;

  }

  generatePath(arcs, index){
    console.log('index: ' + index);
    var path = shape.arc()
      .outerRadius(this.pieRadius)
      .padAngle(.05)
      .innerRadius(30)
      (arcs[index]);

    console.log("Path: ", path);
    return path;
  }




  render() {
    var arcs = this.generateArcs();

    const x = 40;
    const y = 40;
    return(

      <View width={this.props.width} height={this.props.height}>

        <Surface width={this.props.width} height={this.props.height}>
          <Group x={x} y={y}>
            {this.props.data.map((item, index) => (
              <Shape key={'shape_'+index}
                d={this.generatePath(arcs, index)}
                stroke={"#2ca02c"}
                strokeWidth={2}/>
            ))}

          </Group>



        </Surface>


    </View>);
  }
}
