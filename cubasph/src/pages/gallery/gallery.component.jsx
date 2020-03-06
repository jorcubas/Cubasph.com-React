import React from 'react';
 import {connect} from 'react-redux';

import './gallery.styles.scss';

import Item from '../../components/gallery-item/gallery-item.component';

import {firestore, convertGallerySnapshotToMap} from '../../firebase/firebase.utils';
import {galleryUpdateState} from '../../redux/gallery/gallery.actions';

class GalleryPage extends React.Component {
    
    componentDidMount() {
        const {galleryUpdateState} = this.props;
        const collectionRef = firestore.collection('gallery');

        collectionRef.onSnapshot(async snapshot => {
            const galleryRetreivedInformation = convertGallerySnapshotToMap(snapshot);
            galleryUpdateState(galleryRetreivedInformation);
        });
    }

    render() {
        return(
            <div className="Gallery-Page-Component">
                <div className="title">
                    <h1>Galería</h1>
                </div>
                <div className="gallery-items">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        )
    }

};

const mapDispatchToProps = dispatch => ({
    galleryUpdateState: transformedGallery => dispatch(galleryUpdateState(transformedGallery))
});

export default connect(null, mapDispatchToProps)(GalleryPage);