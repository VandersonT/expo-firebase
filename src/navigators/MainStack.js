import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Telas
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Querys from '../screens/Querys';

let teste = false;

const MainStack = createNativeStackNavigator();


export default () => {

    const [ userLogged, setUserLogged ] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // usuário está logado
                setUserLogged(true);
                console.log('Usuário logado');
            } else {
                // usuário não está logado
                setUserLogged(false);
                console.log('Usuário não está logado');
            }
        });

        // quando a tela for desmontada, remove o ouvinte
        return unsubscribe;
    });

    return(
        <MainStack.Navigator>
    
            {userLogged
            ? //Privated Routes
                <>
                    <MainStack.Screen name="Home" component={Home} />
                    <MainStack.Screen name="Querys" component={Querys} />
                </>
            : //Public Routes
                <>
                    <MainStack.Screen name="SignIn" component={SignIn} />
                </>
            }
    
        </MainStack.Navigator>
    )
};