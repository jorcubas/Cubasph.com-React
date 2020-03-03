import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const header = ({currentUser}) => (
    <div className="header">
        <div className="header-elements">
            <Link className="icon" to="/">
                CubasPH
            </Link>
            <div className="options">
                <Link className="option" to="#">
                    Gallery
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

export default header;