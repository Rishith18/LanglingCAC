import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cards from '../Screens/Cards';
import Create from '../Screens/Create';
import Speak from '../Screens/Speak';
import Culture from '../Screens/Culture';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

var Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.tabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;
            if (route.name === 'Create') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Cards') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'Speak') {
              iconName = focused ? 'mic-circle' : 'mic-circle-outline';
            } else if (route.name === 'Culture') {
              iconName = focused ? 'earth' : 'earth-outline';
            }
            return <Icon name={iconName} size={RFValue(20)} color="white" />;
          },
        })}>
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Speak" component={Speak} />
        <Tab.Screen name="Culture" component={Culture} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#9DBBD8',
    height: '12%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
});
