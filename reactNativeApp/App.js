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
import Header from './src/sections/components/headers'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>Hola, Qué haces?</Text>
        </Header>
        <Text>header</Text>
        <Text>search</Text>
        <Text>categories</Text>
        <Text>sugerencias</Text>
      </Home>
    );
  }
}
