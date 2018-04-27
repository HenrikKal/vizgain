import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ProgressInput from './ProgressInput';

export default class Exercise extends Component<props> {

  render() {
    return(

      <View>
        <Text>
          {"Exercise name:"}
        </Text>

      <TextInput/>

      <Text>
        {"Sets"}
      </Text>

      <TextInput/>

      <Text>
        {"Reps"}
      </Text>

      <TextInput/>

      <Text>
        {"Weight"}
      </Text>

      <TextInput/>



      </View>



    );
  }
}
