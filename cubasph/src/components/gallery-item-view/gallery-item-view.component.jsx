import React from 'react';
import {connect} from 'react-redux';

import './gallery-item-view.styles.scss';

import BuyForm from '../buy-form/buy-form.component';
import BuyButton from '../buy-button/buy-button.component';
import { selectSpecificGalleryItem } from '../../redux/gallery/gallery.selectors';
import { selectBuyFormHidden } from '../../redux/buy-form/buy-form.selectors';

const GalleryItemView = ({ Item, Form }) => {
    console.log(Form);
    return(
        <div className="gallery-item-view">
            <div className="item-view-space">
                <img src={Item.imageUrl} alt="Gallery Item" className="gallery-item-image"/>
                <BuyButton className="gallery-item-button"/>
            </div>
            <div className="gallery-item-information">
                <h1 className="item-title">{Item.name}</h1>
                <div className="item-description-group">
                    <h2 className="item-description">Descripción</h2>
                    <p>{Item.description}</p>
                </div>
                <div className="item-country">
                    <h2>Ubicación</h2>
                    <p>{Item.location}, {Item.country}</p>
                </div>
            </div>
            {Form ? null : <BuyForm name={Item.name} imageUrl={Item.imageUrl}></BuyForm>}
        </div>
    );
};
 

const mapStateToProps = (state, ownProps) => ({
    Form: selectBuyFormHidden('hi')(state),
    Item: selectSpecificGalleryItem(ownProps.match.params.galleryItemID)(state)
    
});

export default connect(mapStateToProps)(GalleryItemView);