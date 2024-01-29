import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import StackNav from './nav/StackNav.js';
export default function App() {
  return (
    <NavigationContainer>
        <StackNav/>
    </NavigationContainer>
  );
};
