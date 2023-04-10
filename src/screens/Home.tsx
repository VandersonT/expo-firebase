import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Home = ({ navigation }: any) => {

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            console.log('logado ent fica aqui na home');
        } else {
            // User is signed out
            // ...
            console.log('nao logado');
            navigation.push('SignIn');
        }
        });
    }, [])
    

    const logOut = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });

        //navigation.push('SignIn');
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