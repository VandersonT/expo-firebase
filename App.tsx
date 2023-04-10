import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import { getAuth, onAuthStateChanged } from "firebase/auth";


import MainStack from './src/navigators/MainStack';

export default function App() {

  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}