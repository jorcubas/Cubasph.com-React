import {createSelector} from 'reselect';

// input selector
// it takes the part of the state whose information
// is needed
const selectGallery = state => state.gallery;

export const selectGalleryItems = createSelector(
    [selectGallery],
    gallery => gallery.gallery_data
);


export const selectGalleryCollectionForPreview = createSelector (
    [selectGalleryItems],
    gallery => gallery ? Object.keys(gallery).map(key => gallery[key]): []
 );

 
 export const selectSpecificGalleryItem = collectionUrlParam =>
 createSelector(
     [selectGalleryItems],
     gallery => 
         (gallery ? gallery[collectionUrlParam.split(" ").join("")]: null)
 );
