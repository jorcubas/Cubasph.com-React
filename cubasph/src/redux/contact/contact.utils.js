import {firestore} from '../../firebase/firebase.utils';


export const addContact = (name, email, subject, body) => {
    // Add a new document with a generated id.
    firestore.collection("contact").add({
        name: name,
        email: email,
        subject: subject,
        body: body
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}