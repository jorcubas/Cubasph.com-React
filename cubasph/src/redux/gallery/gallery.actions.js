import GalleryStateUpdateTypes from './gallery.types';

export const galleryUpdateState = transformedGallery => ({
    type: GalleryStateUpdateTypes.GALLERY_STATE_UPDATE,
    payload: transformedGallery
});
