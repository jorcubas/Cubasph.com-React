import React from 'react';

import './home.styles.scss';

import LandingBackground from '../../components/landing-background/landing-background.component';
import PrintsAd from '../../components/prints-ad/prints-ad.component';
import GalleryAd from '../../components/gallery-ad/gallery-ad.component';
import EmailSection from '../../components/subscribe-section/subscribe-section.component';

const HomePage = () => (
    <div>
        <LandingBackground/>    
        <GalleryAd/>        
        <PrintsAd/>
        <EmailSection/>
    </div>
);


export default HomePage;