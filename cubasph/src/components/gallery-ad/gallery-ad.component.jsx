import React from 'react';

import './gallery-ad.styles.scss';

import Frames from './Frames.png';
import GalleryButton from '../../components/gallery-button/gallery-button.component';

const GalleryAd = () => (
    <div className="gallery-section">
        <div className="gallery-section-title">
            <h1 className='titleName-gallery'>Variedad de <br/> Fotografías <br/> Enmarcadas</h1>
        </div>
        <div className="frame-button-title">
            <img src={Frames} alt="Frame Examples"/>
            <button>Ver Galería</button>
        </div>
    </div>
);

export default GalleryAd;