import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { getDatabase } from "firebase/database";
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDQybE3IRAFZbiPokotCdfSdmma7_qsyRs",
  authDomain: "clone-project-66aba.firebaseapp.com",
  projectId: "clone-project-66aba",
  storageBucket: "clone-project-66aba.appspot.com",
  messagingSenderId: "474065775368",
  appId: "1:474065775368:web:1e5006a6ef1e6377ae9abd"
};
    
const firebaseApp =  firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore(); // to connect with reacltime firebase database
  
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  {database, auth, provider};
