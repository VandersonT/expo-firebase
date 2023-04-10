 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import db from '../config';
import { collection, doc, setDoc, getDocs, where, query, limit, getDoc, deleteDoc } from "firebase/firestore"; 

const Querys = () => {

    const antCloneDelete = () => {
        // Crie uma referência ao documento que você deseja remover
        const documentRef = doc(db, 'users', 'Rere');

        // Use a função deleteDoc para remover o documento
        deleteDoc(documentRef)
        .then(() => {
        console.log('Documento removido com sucesso!');
        })
        .catch((error) => {
        console.error('Erro ao remover documento: ', error);
        });
    }

    const getUnique = async () => {
        const docRef = doc(db, "users", "SF");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const teste = async () => {

        const userRef = collection(db, "users");

        await setDoc(doc(userRef, "Rere"), {
            name: "Raissa", 
            state: "Claudio",
            country: "EUA",
        });

    }

    const teste2 = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

    const teste3 = async () => {
    const q = query(collection(db, "users"), where("name", "==", "Raissa"), where("state", "==" ,"Claudio"), limit(1));

    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

    return (
        <View style={styles.container}>
      
            <Text>ProjetoX</Text>

            <TouchableOpacity onPress={() => teste()}>
                <Text>Inserir dados</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => teste2()}>
                <Text>Pegar dados</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => teste3()}>
                <Text>Pegar dado unico</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => getUnique()}>
                <Text>Pegar dado unico real</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => antCloneDelete()}>
                <Text>Deleta</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Querys;