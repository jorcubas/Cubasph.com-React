import React from 'react';
import {Link} from 'react-router-dom';

import './custom-button.styles.scss';

const customButton = () => (
    <Link className='custom-button' to="/gallery">
        Ver Galería
    </Link>
);

export default customButton; 