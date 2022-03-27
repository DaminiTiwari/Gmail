import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { getDatabase } from "firebase/database";
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {

};
    
const firebaseApp =  firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore(); // to connect with reacltime firebase database
  
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  {database, auth, provider};
