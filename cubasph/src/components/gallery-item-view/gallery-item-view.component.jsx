import React from 'react';
import {connect} from 'react-redux';


import './gallery-item.styles.scss';

import GalleryItem from '../gallery-item/gallery-item.component';
import { selectSpecificGalleryItem } from '../../redux/gallery/gallery.selectors';

const GalleryItemView = ({match, GalleryItem}) => (
    <div className="gallery-item-view">
        <div className="gallery-item-information">
            <h1>Description</h1>
        </div>
        <div className="gallery-item">
            <GalleryItem key={GalleryItem.name} item={GalleryItem}/>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps)=> ({
    // Buscar por que el state es necesario pasarlo
    GalleryItem: selectSpecificGalleryItem(ownProps.match.params.galleryItemID)(state)
});

export default connect(mapStateToProps)(GalleryItemView);