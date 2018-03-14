import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ProgressInput from './ProgressInput';

export default class Exercise extends Component<props> {

  render() {
    return(

      <View>
        <Text>
          {this.props.exercise}
        </Text>

      <ProgressInput/>

      </View>



    );
  }
}
