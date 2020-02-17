import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyNavigator from './MyNavigator';
export default class App extends React.Component {
    render() {
      return (
        <MyNavigator />
      );
    }
  }

AppRegistry.registerComponent(appName, () => App);
