import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './gallery-item.styles.scss';

import GalleryItem from '../gallery-item/gallery-item.component';
import { selectGalleryItems, selectSpecificGalleryItem, selectGalleryCollectionForPreview } from '../../redux/gallery/gallery.selectors';

const GalleryItemView = ({Item}) => {
    console.log(Item);
    return(
        <div className="gallery-item-view">
            <div className="gallery-item-information">
                <h1>{Item.name}</h1>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    Item: selectSpecificGalleryItem(ownProps.match.params.galleryItemID)(state)
});

export default connect(mapStateToProps)(GalleryItemView);