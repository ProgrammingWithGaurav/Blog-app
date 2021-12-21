import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA36UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
    authDomain: "reactprojects-12bbe.firebaseapp.com",
    databaseURL: "https://reactprojects-12bbe-default-rtdb.firebaseio.com",
    projectId: "reactprojects-12bbe",
    storageBucket: "reactprojects-12bbe.appspot.com",
    messagingSenderId: "742066518833",
    appId: "1:742066518833:web:963df4217f4f90409d4e10",
    measurementId: "G-DYD5H9HLDT"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export { auth, provider };
export default db;