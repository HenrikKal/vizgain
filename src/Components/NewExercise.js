import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import ProgressInput from './ProgressInput';
import Database from '../Database';

export default class Exercise extends Component<props> {



  constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this);

    this.state = {
      exerciseName: "",
      sets: 0,
      reps: 0,
      weight: 0
    }
  }

  clicked(){

    console.log("CLICKED");

    console.log(this.state);
    Database.addExercise(this.state);
  }


  render() {
    return(

      <View>
        <Text>
          {"Exercise name:"}
        </Text>

      <TextInput onChangeText={(text) => this.setState({exerciseName: text})}/>

      <Text>
        {"Sets"}
      </Text>

      <TextInput onChangeText={(text) => this.setState({sets: text})}/>

      <Text>
        {"Reps"}
      </Text>

      <TextInput onChangeText={(text) => this.setState({reps: text})}/>

      <Text>
        {"Weight"}
      </Text>

      <TextInput onChangeText={(text) => this.setState({weight: text})}/>

      <Button title={"Create"} onPress={this.clicked}/>



      </View>

    );
  }
}
