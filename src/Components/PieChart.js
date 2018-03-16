import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';


export default class PieChart<props> {



  generateArc(){
    return shape.pie().value((item) => {item.number})(this.props.data);

  }




  render() {
    return(

      <View>


    </View>);
  }
}
