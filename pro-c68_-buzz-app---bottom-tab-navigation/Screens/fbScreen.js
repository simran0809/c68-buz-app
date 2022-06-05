import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Link } from 'react-router';

export default class Searchscreen extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require('../assets/facebook.png')}
          style={{
            marginTop: 50,
            width: '100%',
            height: '200%',
            resizeMode: 'cover',
            position: 'absolute',
          }}
        />
        <View>
          {' '}
          <AppHeader />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
          <Image
            source={require('../assets/facebook.png')}
            style={{
              width: 70,
              height: 70,
            }}
          />
          <Text style={{ textAlign: 'center', fontSize: 20 }}> FACEBOOK </Text>
        </View>
      </View>
    );
  }
}
