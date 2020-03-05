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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export const convertGallerySnapshotToMap = (galleryCollection) => {
    const itemCollection = galleryCollection.docs.map( doc =>  {
        const {name, description, imageUrl, country, location} = doc.data();
        return{
            name, 
            description,
            imageUrl,
            country,
            location
        }
    });

    console.log(itemCollection);
    return itemCollection.reduce((accumulator, collection) => {
        accumulator[collection.name.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


