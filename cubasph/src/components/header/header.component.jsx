import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const header = () => (
    <div className="header">
        <div className="header-elements">
            <Link className="icon" to="#">
                CubasPH
            </Link>
            <div className="options">
                <Link className="option" to="#">
                    Gallery
                </Link>
                <Link className="option" to="#">
                    About
                </Link>            
                <Link className="option" to="#">
                    SignIn
                </Link>
            </div>
        </div>
        <div className="title1">
            <h1>Landscape Photopgraphy</h1>
        </div>                      
    </div>  

);

export default header;