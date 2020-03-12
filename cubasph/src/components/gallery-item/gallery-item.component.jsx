import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
// import {createStructuredSelector} from 'reselect';

import './gallery-item.styles.scss';

import {selectGalleryItems} from '../../redux/gallery/gallery.selectors';

const GalleryItem = ({name, imageUrl, linkUrl, match}) => {
    // const {name, imageUrl} = item;
    return(
        <div className='galleryItem-group'>
            
            <Link className="img-link" to={`${match.url}/${linkUrl}`}>
                <img src= {imageUrl} alt="Photography Gallery Item"/> 
            </Link>
            <div className="galleryItem-group-name-information">
                <Link className="link" to={`${match.url}/${linkUrl}`}>{name}</Link>
            </div>
        </div>
        // onClick={() => history.push(`${match.url}${linkUrl}`)}
    )
}; 



// const mapStateToProps = createStructuredSelector({
//     galleryItems: selectGalleryItems
// });

export default withRouter(GalleryItem);