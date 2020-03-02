import React from 'react';

import './subscribe-section.styles.scss';

import SubscribeButton from '../subscribe-button/subscribe-button.component';

const SubscribeSection = () => (
    <div className="SubscribeSection">
        <div className="subscribe-space">
            <div className="subscribe-space-title">
                <h1>Suscribete Para Conocer <br/> de Próximos Productos</h1>
            </div>
            <div className="subscribe-space-input">
                <input className="email" placeholder="email"></input>
                <SubscribeButton/>
            </div>
        </div>
    </div>
);

export default SubscribeSection;