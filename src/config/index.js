import firebase from 'firebase/app';


//import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYw8LMkgLnSZ9d1mrOWyySJ3x30hWMT1I",
  authDomain: "test-bd5c5.firebaseapp.com",
  projectId: "test-bd5c5",
  storageBucket: "test-bd5c5.appspot.com",
  messagingSenderId: "765419539227",
  appId: "1:765419539227:web:1610982f6422ba5bf2e1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;