import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCF2zTX6rh58xLSnO5KEShq6GyCpKU-Fm0",
    authDomain: "abd-app-92eff.firebaseapp.com",
    projectId: "abd-app-92eff",
    storageBucket: "abd-app-92eff.appspot.com",
    messagingSenderId: "488461286305",
    appId: "1:488461286305:web:afa76b22e879ca538e29e0"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp};