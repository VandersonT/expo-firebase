import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Alert } from "react-native";

//import db from "../config";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const SignIn = ({ navigation }: any) => {

    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ emailr, setEmailr ] = useState('');
    const [ senhar, setSenhar ] = useState('');
    const [ namer, setNamer ] = useState('');
    const [ idader, setIdader ] = useState(12);
    const [ isLogin, setIsLogin ] = useState(true);

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            console.log('logado');
            navigation.push('Home');
        } else {
            // User is signed out
            // ...
            console.log('nao logado ent fica aq em login');
        }
        });
    }, []);
    

    const loginHadler = () => {

        if(email && senha){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                    console.log('Logado! ', user);
                    Alert.alert("Logado!!!!");
                    navigation.push('Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('erro login! ', errorMessage);
                Alert.alert(errorMessage);
            });

            //manda pra tela de login de seu bom
            //navigation.push('Home');
        }

    }

    const registerHadler = () => {
        if(emailr && senhar && namer){

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, emailr, senhar)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    console.log('Deu bom o registro', user);
                    Alert.alert("Registrado com sucesso!");
                    navigation.push('Home');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    console.log('Deu zebra o registro', errorMessage);
                    Alert.alert(errorMessage);
                });

            //manda pra tela de login de seu bom
            //navigation.push('Home');
        }
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                <Text>{isLogin ? 'Cadastre-se' : 'Entre na sua conta'}</Text>
            </TouchableOpacity>

            {isLogin &&
                <View>
                    <Text>Login</Text>
                    <TextInput placeholder="digite seu email" value={email} onChangeText={setEmail} />
                    <TextInput placeholder="digite sua senha" value={senha} onChangeText={setSenha} />
                    <TouchableOpacity onPress={loginHadler}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                </View>
            }
            {!isLogin &&
                <View>
                    <Text>Register</Text>
                    <TextInput placeholder="digite seu nome" value={namer} onChangeText={setNamer} />
                    <TextInput placeholder="digite seu email" value={emailr} onChangeText={setEmailr} />
                    <TextInput placeholder="digite sua senha" value={senhar} onChangeText={setSenhar} />
                    <TouchableOpacity onPress={registerHadler}>
                        <Text>Registrar</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});