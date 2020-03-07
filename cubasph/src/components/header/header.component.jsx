import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {convertGalleryItemsToSnapShot} from '../../firebase/firebase.utils';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const header = ({currentUser}) => (
    <div className="header">
        convertGalleryItemsToSnapShot();
        <div className="header-elements">
            <Link className="icon" to="/">
                CubasPH
            </Link>
            <div className="options">
                <Link className="option" to="/gallery">
                    Galería
                </Link>
                <Link className="option" to="/about">
                    About
                </Link>            
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='./signin'>SignIn</Link>
                }
            </div>
        </div>
    </div>  

);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(header);