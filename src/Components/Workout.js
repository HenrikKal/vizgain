import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import NewExercise from './NewExercise';
import Database from '../Database.js';


export default class Workout extends Component<props> {


  constructor(){
    super();

    this.state = {
      data: []
    };

    this.received = this.received.bind(this);
    Database.dbRef.onSnapshot(this.received);


  }


  received = (snapshot) =>{
    console.log("rec");

    let exerciseList = [];
    snapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.id);

        exerciseList.push({'key': doc.id, 'name': doc.data().exerciseName});

      });

    this.setState({
      data: exerciseList
    });

  }





  render() {
    return(

      <View style={styles.container}>
        <Text>{
          new Date().getDay() // to be replaced by week
        }
      </Text>
        <List containerStyle={styles.list}>
          <FlatList
            data={this.state.data}
            extraData={this.state}
          renderItem={({item}) => (
            <ListItem button title={item.name} onPress={() => {Actions.openlistitem({exercise: item.name})}}/>
          )}/>
        </List>
        <View style={styles.buttonContainer}>
          <Text>
            Add an exercise
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => {Actions.new_exercise()}}>
            <Text style={styles.buttonText}>++</Text>
          </TouchableOpacity>
        </View>

      </View>



    );
  }
}



const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    alignSelf: 'center',

  },

  list: {
    flex:4,
    width: 300,


  },

  buttonContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonText: {
    color:'white',
    alignSelf: 'center',

  },


  button: {
    width: 40,
    height: 40,
    backgroundColor: 'powderblue',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,

  },

});
