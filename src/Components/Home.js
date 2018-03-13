import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {


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
