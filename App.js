import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Background ,Dimensions, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListReunion from './ListReunion'
import AjouterReunion from './AjouterReunion'



const Stack = createStackNavigator();

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Liste reunion">
          <Stack.Screen name="Liste reunion" component={ListReunion} />
          <Stack.Screen name="Ajouter une reunion" component={AjouterReunion} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
});
