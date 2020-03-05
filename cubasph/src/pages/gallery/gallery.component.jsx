import React from 'react';

import './gallery.styles.scss';
import {firestore, convertGallerySnapshotToMap} from '../../firebase/firebase.utils';
import {galleryUpdateState} from '../../redux/gallery/gallery.actions';

class GalleryPage extends React.Component {
    
    componentDidMount() {
        console.log("GalleryPage did Mount");
        // const collectionRef = firestore.collection('gallery').doc("London St. Paul Cathedral");
        const collectionRef = firestore.collection('gallery');

        collectionRef.onSnapshot(async snapshot => {
            const galleryRetreivedInformation = convertGallerySnapshotToMap(snapshot);
            galleryUpdateState(galleryRetreivedInformation);
        //     console.log(snapshot.data());
        //     const {name, country,  description, imageUrl} = snapshot.data();
        //     console.log(name);
        //     console.log(country);
        //     console.log(description);
        //     console.log(imageUrl);
        });
    }

    render() {
        return(
            <h1>Gallery Page</h1>
        )
    }

};

export default GalleryPage;