import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {createStructuredSelector} from 'reselect';

import './gallery-item.styles.scss';

import {selectGalleryItems} from '../../redux/gallery/gallery.selectors';

const GalleryItem = ({item}) => {
    const {name, imageUrl} = item;
    return(
        <div className='galleryItem-group'>
            <img src= {imageUrl} alt="Photography Gallery Item"/> 
            <div className="galleryItem-group-name-information">
                <Link className="link" to={'/gallery/prusia'} >{name}</Link>
            </div>
        </div>
    )
}; 

// const mapStateToProps = createStructuredSelector({
//     galleryItems: selectGalleryItems
// });

export default GalleryItem;