import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpPage from './SignUpPage';
import Home from './Home'
import Profile from './Profile'
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}
export default Main;
