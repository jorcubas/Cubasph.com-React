import React from 'react';

import './home.styles.scss';

import LandingBackground from '../../components/landing-background/landing-background.component';
import Header from '../../components/header/header.component';

const HomePage = () => (
    <div>
        <LandingBackground/>    
        <Header/>
    </div>
);

export default HomePage;