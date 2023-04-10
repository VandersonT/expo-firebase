import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Telas
import Home from '../screens/Home';
import Querys from '../screens/Querys';
import SignIn from '../screens/SignIn';

const MainStack = createNativeStackNavigator();

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Querys" component={Querys} />
        <MainStack.Screen name="SignIn" component={SignIn} />
        <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
);