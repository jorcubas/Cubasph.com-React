import {firestore} from '../../firebase/firebase.utils';
import {subscribed} from './subscribe.actions';

export const addSubmission = (email) => {
    // Add a new document with a generated id.
    firestore.collection("subscriptions").add({
        email: email,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// const types = {
//     FOUND: 'FOUND',
//     NOT_FOUND: 'NOT_FOUND'
// }

// export const verifySubscription = async (email) => {
//     const usersRef = await firestore.collection("subscriptions").where("email", "==", email)

//     await usersRef.get().then((docSnapshot) => {
//         if (docSnapshot.docs.length > 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }); 
// }