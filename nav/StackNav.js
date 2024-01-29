import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../view/Login.js';
import Start from '../view/Start.js';
import Reje from '../view/Reje.js';
import TabNav from './TabNav.js';

const Stack = createNativeStackNavigator();

const optionScreen = {
  headerShown: false
}

const StackNav = () => (
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name= "Login" options={optionScreen} component={Login} />
    <Stack.Screen name= "Start" options={optionScreen} component={Start} />
    <Stack.Screen name= "Reje" options={optionScreen} component={Reje} />
    <Stack.Screen name= "TabNav" options={optionScreen} component={TabNav} />
  </Stack.Navigator>
)
export default StackNav;