
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements';


export default class LigneReunion extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.row}>
        <Image style={styles.picture} source={{ uri: this.props.image_url }} />
        <View style={{width: 250}} >
          <Text style={styles.primaryText}>
            {this.props.Text}
          </Text>
        </View>
        <View style={styles.icon}>
          <Icon 
            name='delete'
            type='material'
            color='grey'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 ,
    borderBottomWidth:1,
    borderBottomColor:'grey'  
  },

  picture: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 18 
  },

  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },

  icon: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});