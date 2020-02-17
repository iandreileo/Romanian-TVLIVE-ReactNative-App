import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';

import {name as appName} from './app.json';
import MyNavigator from './MyNavigator';
export default class MainScreen extends React.Component {
    render() {
      return (
        <View>
            <Text>Test</Text>
            <Image source={{uri: './assets/logo.png'}} />
        </View>
      );
    }
  }

 