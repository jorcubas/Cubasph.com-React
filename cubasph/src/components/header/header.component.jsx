import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {convertGalleryItemsToSnapShot} from '../../firebase/firebase.utils';
 
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo2}  from  '../../assets/images/logoFinal.svg';
// import { ReactComponent as Logo } from '../../assets/crown.svg';

const header = ({currentUser}) => (
    <div className="header">
        <div className="header-elements">
            <Link className="icon" to="/">
                <Logo2 className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/gallery">
                    Galería
                </Link>
                <Link className="option" to="/about">
                    Sobre Mi
                </Link>            
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Cerrar Sesión</div>
                    :
                    <Link className='option' to='/signin'>Ingresar</Link>
                }
            </div>
        </div>
    </div>  
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(header);