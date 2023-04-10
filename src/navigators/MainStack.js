import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Telas
import Home from '../screens/Home';
import Querys from '../screens/Querys';

const MainStack = createNativeStackNavigator();

export default () => (
    <MainStack.Navigator>
    <MainStack.Screen name="Querys" component={Querys} />
        <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
);