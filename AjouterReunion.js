import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class AjouterReunion extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.pravatar.cc/200',
          }} />

        <TextInput
          placeholder='Heure reunion'
          style={styles.simpleInput} />

        <TextInput
          placeholder='Lieu reunion'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Sujet reunion'
          style={styles.simpleInput}
          />

        <TouchableOpacity
            style={styles.buttonA}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>


        <StatusBar style="auto" />
      </View>
    );
      }
}

const styles = StyleSheet.create({

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: 'blue', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: 'blue', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonA: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
