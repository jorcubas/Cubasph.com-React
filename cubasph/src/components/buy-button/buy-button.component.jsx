import React from 'react';
import {connect} from 'react-redux';

import './buy-button.styles.scss';

import {toggleBuyForm} from '../../redux/buy-form/buy-form.actions';

const buyButton = ({toggleBuyFormHidden}) => (
    <div className="buy-button-group">
        <button className="buy-button" onClick={toggleBuyFormHidden}>Cotizar</button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleBuyFormHidden: () => dispatch(toggleBuyForm())
});

export default connect(null, mapDispatchToProps)(buyButton);