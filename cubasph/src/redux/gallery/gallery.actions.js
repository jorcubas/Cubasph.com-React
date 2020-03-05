import GalleryStateUpdateTypes from './gallery.types';

export const galleryUpdateState = transformedCollection => ({
    type: GalleryStateUpdateTypes.GALLERY_STATE_UPDATE,
    payload: transformedCollection
});
