import React from 'react';
import {connect} from 'react-redux';

import './buy-form.styles.scss';

import {toggleBuyForm} from '../../redux/buy-form/buy-form.actions';

const BuyForm =  ({toggleBuyFormHidden, name, imageUrl}) => {
    return(
        <div className="Buy-Form">
            <div className="Buy-Form-Window">
                <div className="Buy-Form-Info">
                    <div className="close-button" onClick={toggleBuyFormHidden}>+</div>
                    <h1>{name}</h1>
                    <img src={imageUrl}></img>
                    <input placeholder="E-mail"></input>
                    <input placeholder="Detalle Adicional"></input>
                    <p>La cotización será respondida directamente por el correo del formulario. </p>
                    <button>Mandar Cotización</button>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleBuyFormHidden: () => dispatch(toggleBuyForm())
});

export default connect(null, mapDispatchToProps)(BuyForm);