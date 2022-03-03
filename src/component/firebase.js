import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBEcvFCvblsjZ-49T9JGODMOvn8Tptvs9c",
    authDomain: "login-b82b8.firebaseapp.com",
    projectId: "login-b82b8",
    storageBucket: "login-b82b8.appspot.com",
    messagingSenderId: "711565686868",
    appId: "1:711565686868:web:d52b81696bbeef984f95c1",
    measurementId: "G-TDXX28ZBR5"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };