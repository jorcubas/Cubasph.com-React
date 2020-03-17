import React from 'react';

import './landing-background.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {Link} from 'react-router-dom';

const landingBackground = () => (
    <div className="background-container">
        <div className='title-text-box'>
            <h1> Fotografías de Paisajes <br/> Por Jorge Cubas</h1>
            <Link className='custom-button' to="/gallery">Ver Galería</Link>
        </div>
        
    </div>
);

export default landingBackground; 