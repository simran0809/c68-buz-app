import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>  SOCIAL BUZZ </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '',
  },
  text:{
    color: 'red',
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;