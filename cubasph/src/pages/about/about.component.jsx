import React from 'react';

import './about.styles.scss';

import Image from './Zermatt1.2.jpg';

const aboutPage = () => (
    <div className="about-info">
        <img  src= {Image} alt="Profile Photo"/>
        <div className="text">
            <h1>Conoce sobre Mi</h1>
            <p>Viajar y aventurar son cosas que siempre me han apasionado. Para mi el capturar un momento en el tiempo
            o un recuerdo es algo que no tiene precio. Las fotgrafías de paisajes son de las ftografías que mas me 
            apasionan. Por lo tanto el poder tener una plataforma donde pueda vender mis fotografías siempre ha sido 
            un pequeño sueño mío. Por eso cree esta plataforma como página web donde se pueden cotizar mis 
            fotografías y enmarcarlas para diferentes ambientes que queden a imaginción de las personas.  </p>        
        </div>
    </div>
)

export default aboutPage;