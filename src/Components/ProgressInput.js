import React, {Component} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

class ProgressInput extends Component<props> {


  render() {

    return (
      <TextInput placeholder="input reps" style={styles.input}>

      </TextInput>
    );

  }

}

const styles = StyleSheet.create({
  input: {
    width: 200,

  },
});


export default ProgressInput;
