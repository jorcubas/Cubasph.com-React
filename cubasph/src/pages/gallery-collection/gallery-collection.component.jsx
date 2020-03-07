import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './gallery-collection.styles.scss';

import GalleryItem from '../../components/gallery-item/gallery-item.component';
import {selectGalleryCollectionForPreview} from '../../redux/gallery/gallery.selectors';

const GalleryCollection = ({data}) => (
    <div className="Gallery-Page-Component">
        <div className="title">
            <h1>Galería</h1>
        </div>
        <div className="gallery-items">
        {
            data.map(({id, ...otherSectionProps}) => (
                <GalleryItem key={id} {...otherSectionProps}/>
            ))
        }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    data: selectGalleryCollectionForPreview
});

export default connect(mapStateToProps)(GalleryCollection);