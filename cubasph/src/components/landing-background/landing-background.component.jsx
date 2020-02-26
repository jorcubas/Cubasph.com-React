import React from 'react';

import './landing-background.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const landingBackground = () => (
    <div className="background-container">
        <div className='title-text-box'>
            <h1> Landscape Photography Prints<br/> By Jorge Cubas</h1>
            <CustomButton/>
        </div>
        
    </div>
);

export default landingBackground;