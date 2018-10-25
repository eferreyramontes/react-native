/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  Image,
  } from 'react-native';


import Home from './src/screens/containers/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>header</Text>
        <Text>search</Text>
        <Text>categories</Text>
        <Text>suggestions</Text>
      </Home>
    );
  }
}
