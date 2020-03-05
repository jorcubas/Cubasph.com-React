import GalleryStateUpdateTypes from './gallery.types';
// import GalleryButton from '../../components/gallery-button/gallery-button.component';

const INITIAL_STATE = {
    gallery_data: null
}

const galleryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GalleryStateUpdateTypes.GALLERY_STATE_UPDATE:
            return{
                ...state, 
                gallery_data: action.payload
            }
        default:
            return state;
    }
}

export default galleryReducer;