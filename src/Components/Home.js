import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {


  render() {

    return (
    <View>

    <TouchableOpacity style={styles.button} onPress={() => {Actions.pushw}}>
      <Text>Push workout</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {Actions.pullw}}>
      <Text>Pull workout</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {Actions.legw}}>
      <Text>Leg workout</Text>
    </TouchableOpacity>

    </View>
  );

  }

}



const styles = StyleSheet.create({

  button: {
    backgroundColor: 'steelblue',
    alignItems: 'center'
  }

});
