import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class Workout extends Component<props> {


  constructor(){
    super();
    this.createNewExercise = this.createNewExercise.bind(this);

    this.state = {
      data: [{'key': 'a1', 'name': "yo"}, {'key': 'a2', 'name': "hehe"}]
    };
  }



  createNewExercise(){
    console.log("new exercise");
    const d = this.state.data;

    d.push({'key': 'a3', 'name': "zup"});
    this.setState({
      data: d
    });



  }




  render() {
    return(

      <View style={styles.container}>
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

          <TouchableOpacity style={styles.button} onPress={this.createNewExercise}>
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
