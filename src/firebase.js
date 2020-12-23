import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0YZKFoqcou1-CZRmnF45aAsBh46kvnJw",
    authDomain: "auth-2020-b9385.firebaseapp.com",
    projectId: "auth-2020-b9385",
    storageBucket: "auth-2020-b9385.appspot.com",
    messagingSenderId: "257294506516",
    appId: "1:257294506516:web:eaf4eb34a1429e0f6ca501"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };


