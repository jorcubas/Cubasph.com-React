import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import galleryReducer from './gallery/gallery.reducer';

export default combineReducers({
    user: userReducer,
    galleryReduccer: galleryReducer
});