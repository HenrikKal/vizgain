import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class Workout extends Component<props> {


  constructor(){
    super();
    this.createNewExercise = this.createNewExercise.bind(this);
    this.gogo = this.gogo.bind(this);

    this.state = {
      data: [{'key': 'a1', 'name': "yo"}, {'key': 'a2', 'name': "hehe"}]
    };
  }



  createNewExercise(){
    console.log("new exercise");
    const d = this.state.data;
    d.push({'key': 'a3', 'name': "hehe"});
    this.setState({
      data: d
    });



  }

  gogo(){
    console.log("gogo");
    Actions.openlistitem;

  }


  render() {
    return(

      <View style={styles.container}>
        <List containerStyle={styles.list}>
          <FlatList
            data={this.state.data}
          renderItem={({item}) => (
            <ListItem button title={item.name} onPress={() => {Actions.openlistitem({exercise: item.name})}}/>
          )}/>
        </List>
        <Text>
          {this.props.name}
          {'Add an exercise'}
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.createNewExercise}>
          <Text style={{color:'white'}}>++</Text>
        </TouchableOpacity>

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
    height: 100,
    width: 100,


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
