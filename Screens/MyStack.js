import React, { Profiler } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import  WelcomeScreen  from './sc/WelcomeScreen';
import SignUp from './sc/SignUpPage';
import Main from './sc/Main';
const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName="WelcomeScreen" >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            {/* <Stack.Screen name="Signup Page" component={SignUp} /> */}
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    )
}

export default MyStack;