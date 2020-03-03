import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfYskShZaTQZEC87pVa_TeSfYppSE6IVk",
    authDomain: "cubasph-6a934.firebaseapp.com",
    databaseURL: "https://cubasph-6a934.firebaseio.com",
    projectId: "cubasph-6a934",
    storageBucket: "cubasph-6a934.appspot.com",
    messagingSenderId: "650859613138",
    appId: "1:650859613138:web:d35c3328939629653b160b",
    measurementId: "G-XC335ZV04N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


