import {createSelector} from 'reselect';

// input selector
// it takes the part of the state whose information
// is needed
const selectGallery = state => state.gallery;

export const selectGalleryItems = createSelector(
    [selectGallery],
    gallery => gallery.gallery_data
);




