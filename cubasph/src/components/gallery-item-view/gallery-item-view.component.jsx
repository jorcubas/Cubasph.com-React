import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './gallery-item-view.styles.scss';

import GalleryItem from '../gallery-item/gallery-item.component';
import BuyButton from '../buy-button/buy-button.component';
import { selectSpecificGalleryItem } from '../../redux/gallery/gallery.selectors';

const GalleryItemView = ({Item}) => {
    console.log(Item);
    return(
        <div className="gallery-item-view">
            <div className="item-view-space">
                <img src={Item.imageUrl} alt="Gallery Item" className="galery-item-image"/>
                <BuyButton className="gallery-item-button" onClick={<h1>Hollaaa</h1>}/>
            </div>
            <div className="gallery-item-information">
                <h1 className="item-title">{Item.name}</h1>
                <div classname="item-description-group">
                    <h2 classname="item-description">Descripción</h2>
                    <p>{Item.description}</p>
                </div>
                <div className="item-country">
                    <h2>Ubicación</h2>
                    <p>{Item.location}, {Item.country}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    Item: selectSpecificGalleryItem(ownProps.match.params.galleryItemID)(state)
});

export default connect(mapStateToProps)(GalleryItemView);