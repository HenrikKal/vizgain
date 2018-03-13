import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class Workout extends Component<props> {


  constructor(){
    super();
    this.createNewExercise = this.createNewExercise.bind(this);

    this.state = {
      data: [{'key': 1, 'name': "yo"}]
    };
  }



  createNewExercise(){
    console.log("new exercise");
    this.setState({
      data: data.push({'key: 2, name': "hehe"})
    });



  }


  render() {
    return(

      <View style={styles.container}>
        <List style={styles.list}>
          <FlatList
            data={this.state.data}
          renderItem={({item}) => (
            <ListItem title={item.name} />
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
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',

  },

  list: {
    flex: 2,


  },

  button: {
    flex: 1,
    width: 40,
    height: 40,
    backgroundColor: 'powderblue',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,

  },

});
