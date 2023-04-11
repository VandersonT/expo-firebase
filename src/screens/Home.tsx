import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Home = ({ navigation }: any) => {

    /*useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('Usuário logado[Home aceita acesso]');
        } else {
            console.log('Usuário não está logado [Home nega acesso]');
            navigation.navigate('SignIn');
            // usuário não está logado, manda pra login
        }
        });

        // quando a tela for desmontada, remove o ouvinte
        return unsubscribe;
    }, []);*/

    const logOut = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });

        navigation.push('SignIn');
    }

    const teste = () => {
        navigation.push('SignIn');
    }

    return (
        <View style={styles.container}>
            <Text>HOME</Text>

            <TouchableOpacity onPress={logOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;