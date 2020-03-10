import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import galleryReducer from './gallery/gallery.reducer';
import buyFormReducer from './buy-form/buy-form.reducer';
import submissionReducer from './submission/submission.reducer';

export default combineReducers({
    user: userReducer,
    gallery: galleryReducer,
    buyForm: buyFormReducer,
    submission: submissionReducer
});