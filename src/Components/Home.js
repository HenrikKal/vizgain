import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PieChart from './PieChart';


export default class Home extends Component {

  constructor(){
    super();

    this.data = [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
  ];
  }


  render() {

    return (
    <View style={styles.container}>

    <TouchableOpacity style={styles.button} onPress={Actions.pushw}>
      <Text>Push workout</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={Actions.pullw}>
      <Text>Pull workout</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={Actions.legw}>
      <Text>Leg workout</Text>
    </TouchableOpacity>
    <PieChart width={100} height={100} data={this.data}></PieChart>

    </View>
  );

  }

}



const styles = StyleSheet.create({

  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 120,
    height: 40,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }

});
