import firebase from 'firebase';

const firebaseConfig = {
    // FIrebase Config
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export { auth, provider };
export default db;