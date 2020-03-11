import React from 'react';
 
import './prints-ad.styles.scss';
import IphoneImage from './app-iPhone2.png';

import InstagramButton from '../instagram-button/instagram-button.component';
 
const PrintsAd = () => (
    <div className='printSection'> 
        <img src={IphoneImage} alt="Display" className="image-go"/>
        <div className="title">
            <h1> Sigueme En <br/> Instagram Para <br/> Nuevas Fotografías</h1>                
            <a href="https://www.instagram.com/jorcubas/" target="_blank">Follow</a> 
        </div>            
    </div>
); 

export default PrintsAd;