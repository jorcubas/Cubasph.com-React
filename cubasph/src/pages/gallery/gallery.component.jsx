import React from 'react';
 import {connect} from 'react-redux';

import './gallery.styles.scss';
import {firestore, convertGallerySnapshotToMap} from '../../firebase/firebase.utils';
import {galleryUpdateState} from '../../redux/gallery/gallery.actions';

class GalleryPage extends React.Component {
    
    componentDidMount() {
        const {galleryUpdateState} = this.props;
        console.log("GalleryPage did Mount");
        // const collectionRef = firestore.collection('gallery').doc("London St. Paul Cathedral");
        const collectionRef = firestore.collection('gallery');

        collectionRef.onSnapshot(async snapshot => {
            const galleryRetreivedInformation = convertGallerySnapshotToMap(snapshot);
            console.log("Hola");
            galleryUpdateState(galleryRetreivedInformation);
        });
    }

    render() {
        return(
            <h1>Gallery Page</h1>
        )
    }

};

const mapDispatchToProps = dispatch => ({
    galleryUpdateState: transformedGallery => dispatch(galleryUpdateState(transformedGallery))
});

export default connect(null, mapDispatchToProps)(GalleryPage);