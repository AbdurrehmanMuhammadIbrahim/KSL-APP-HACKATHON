import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { addDoc,collection,doc,onSnapshot,setDoc } from "firebase/firestore";

import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6OKVMr6-FtFGsLGIB8SM7Ti56eeh7dNc",
    authDomain: "fir-react-image-df446.firebaseapp.com",
    projectId: "fir-react-image-df446",
    storageBucket: "fir-react-image-df446.appspot.com",
    messagingSenderId: "782935307558",
    appId: "1:782935307558:web:8bb9d6f0bf86b70ba63de7"
  };

initializeApp(firebaseConfig)

const db = getFirestore();

export {db,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, addDoc, collection, doc, onSnapshot, setDoc}