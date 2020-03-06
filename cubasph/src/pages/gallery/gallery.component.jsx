import React from 'react';
import {Route} from 'react-router-dom';
 import {connect} from 'react-redux';

import './gallery.styles.scss';

import GalleryCollection from '../gallery-collection/gallery-collection.component.jsx';
import GalleryItemView from '../../components/gallery-item-view/gallery-item-view.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertGallerySnapshotToMap} from '../../firebase/firebase.utils';
import {galleryUpdateState} from '../../redux/gallery/gallery.actions';

const GalleryWithSpinner = WithSpinner(GalleryCollection);
const GalleryItmeWithSpinner = WithSpinner(GalleryItemView);

class GalleryPage extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        const {galleryUpdateState} = this.props;
        const collectionRef = firestore.collection('gallery');

        collectionRef.onSnapshot(async snapshot => {
            const galleryRetreivedInformation = convertGallerySnapshotToMap(snapshot);
            galleryUpdateState(galleryRetreivedInformation);
            this.setState({loading: false});
        });
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render = {props => (<GalleryWithSpinner isLoading={loading} {...props} />)} />
                <Route path={`${match.path}/:galleryItemID`} render = {props => (<GalleryItmeWithSpinner isLoading={loading} {...props} />)} />
                
            </div>
        );
    }

};

const mapDispatchToProps = dispatch => ({
    galleryUpdateState: transformedGallery => dispatch(galleryUpdateState(transformedGallery))
});

export default connect(null, mapDispatchToProps)(GalleryPage);