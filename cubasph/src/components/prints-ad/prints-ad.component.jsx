import React from 'react';

import './prints-ad.styles.scss';
import IphoneImage from './app-iPhone2.png';

import InstagramButton from '../instagram-button/instagram-button.component';

const PrintsAd = () => (
    <div className='printSection'> 
        <div className="ImageArea">            
            <img src={IphoneImage} alt="Display" />
            <div className="title">
                <h1> Sigueme En <br/> Instagram Para <br/> Nuevas Fotografías</h1>
                <InstagramButton/> 
            </div>            
        </div>
    </div>
); 

export default PrintsAd;