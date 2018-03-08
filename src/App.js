import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox
} from 'react-native';
import ProgressInput from './Components/ProgressInput';
import {Router, Scene} from 'react-native-router-flux';
import Workout from './Components/Workout';


// issue: https://github.com/facebook/react-native/issues/18175
// suppress these warnings as of now
// should be fixed pretty soon
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

type Props = {};
export default class App extends Component<Props> {


  render() {
    return (

      <Router titleStyle={{alignSelf:'center'}}>
        <Scene key='root'>
          <Scene key='pushw' component={Workout} title="Pushw" name="Push">
          </Scene>
          <Scene key='pullw' component={Workout} title="Pullw" name="Pull">

          </Scene>

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  progress: {



  },
});