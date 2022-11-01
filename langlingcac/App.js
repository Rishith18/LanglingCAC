import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn';
import TabNavigator from './components/TabNavigator';

const Stack = createStackNavigator();

// switch the stack.navigator for final

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen component={SignIn} name="Sign In / Log In" />
          <Stack.Screen component={TabNavigator} name="DashBoard" />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

