import React from 'react';

import './gallery-ad.styles.scss';

import LondonFrame from './London Frame.png';
import ParisFrame from './Paris Frame.png';
import ZermattFrame from './Zermatt Frame.png';
import GalleryButton from '../../components/gallery-button/gallery-button.component';

const GalleryAd = () => (
    <div className="gallery-section">
        <div className="gallery-section-title">
            <h1 className='titleName-gallery'>Variedad de <br/> Fografías <br/> Enmarcadas</h1>
            <GalleryButton/>
        </div>
        
        <ul className="gallery-section-imageArea">
            <li> <img src={LondonFrame} alt="London Frame"/></li>
            <li> <img src={ZermattFrame} alt="Zermatt Frame"/></li>
            <li> <img src={ParisFrame} alt="Paris Frame"/> </li>
        </ul>
    </div>
);

export default GalleryAd;