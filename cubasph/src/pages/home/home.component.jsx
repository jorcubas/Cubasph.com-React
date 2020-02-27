import React from 'react';

import './home.styles.scss';

import LandingBackground from '../../components/landing-background/landing-background.component';
import PrintsAd from '../../components/prints-ad/prints-ad.component';

const HomePage = () => (
    <div>
        <LandingBackground/>    
        <PrintsAd/>
    </div>
);

export default HomePage;