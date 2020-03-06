import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {createStructuredSelector} from 'reselect';

import './gallery-item.styles.scss';

import {selectGalleryItems} from '../../redux/gallery/gallery.selectors';

const GalleryItem = () => (
    <div className='galleryItem-group'>
        <img src="https://lh3.googleusercontent.com/y8YqDOTGzHnQt-RSPakw_Q_XerWiMXVHqxEKK3YycFNAQnfl6etEkhnWYZchPgw7Z1yAQZVWV0DNVEf9i_FUN4dsudjhGzhPZwt61RiIGreXXNGGeXtXSymrX7f1yt9903JkcR1YHPbuVCFKD-c5rVp1ljMWtLL_IXx8TtDee2RhvddV0o2VvWw3GzWVw9MSKJdTmUFoZyyyyWqALAZKZ0FV1FKMPNaeJe7I4NshEVYYXTIx6G8xPC3eLBpssQ8SIaYyYnhDhe3w-f2M90xnyPR5SYjP3nsBhHz59IIRHedrzoCgCtH2dJSZ4z_hNawjxr5r4oq3kUt-J-N8TKDU0qS2Lt4h2JN1LIeEcvxQfGa72Oj6nOSdlJgetC8v1TwO9mq7ZQa4mcLuLV-CJgYN2I7_j7A4MEIhngLE83NgGGwnJqq5jWuK-Qb6VGX_iDKyCaJ_7apM8zJVa4Gn_UHPteA0QgjKpFpo9PllIS4WhvWIsFRUfIwwklBzi0aWSuOlGHlOJM3C40C1Vi84igdc5GOQq9t3sSFgpo8X_4GWtjcPytVgHG5Dh_GK3vebxlErAPUJEeW3vCAWmpFggsQ9JsK8mcsPVOX3ucflQa-iotHwo4VVnUkOn-p-vUeKgz4DRolNU2uD5Rjh3vwBwk0Dyu0BZ45A3v918DxpQhOSJL-G9ZnbRSVWpA=w660-h990-no" alt="Gallery Item Available"/> 
        <div className="galleryItem-group-name-information">
            <Link className="link" to='/item'>Gallery Item Title</Link>
        </div>
    </div>
); 

// const mapStateToProps = createStructuredSelector({
//     galleryItems: selectGalleryItems
// });

export default GalleryItem;