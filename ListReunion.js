import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity, FlatList } from 'react-native';
import LigneReunion from './LigneReunion'
import { FloatingAction } from "react-native-floating-action";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const actions = [
  {
    text: "Add",
    icon: require("./assets/ic_white.png"),
    name: "btn_add",
    position: 1
  },
];
export default class ListReunion extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation
    this.state = {
      reunion: []
    }
  }

  componentDidMount(){
    
    fetch("https://demo9081734.mockable.io/reunion")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        reunion: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }


  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.reunion}
          style={styles.listStyle}
          renderItem={
            ({item}) => <LigneReunion Text={item.Text} image_url={item.picture} />
          }>
        </FlatList>

        <FloatingAction
            actions={actions}
            onPressItem={name => {
              if (name == 'btn_add'){
                this.navigation.navigate('Ajouter une reunion')
              }
            }}
        />


        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listStyle: {

  }


});
