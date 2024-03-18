import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

firebase.initializeApp({
    apiKey: "AIzaSyDc-e45ZiLnQaToCCvsv2xy81klyh_FtVw",
    authDomain: "maytra-4c827.firebaseapp.com",
    projectId: "maytra-4c827",
    storageBucket: "maytra-4c827.appspot.com",
    messagingSenderId: "948849485771",
    appId: "1:948849485771:web:ab2be03596b65595a2f84e"
});

const fb = firebase;

export default fb;