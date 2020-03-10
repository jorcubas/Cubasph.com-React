import {firestore} from '../../firebase/firebase.utils';


export const addSubmission = (email, body, frame) => {
    // Add a new document with a generated id.
    firestore.collection("submissions").add({
        email: email,
        body: body,
        frame: frame
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}