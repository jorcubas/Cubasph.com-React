import {contactTypes} from './contact.types';

export const setContactName = object => ({
    type: contactTypes.SET_NAME_STATE,
    payload: object
});

export const setContactEmail = object => ({
    type: contactTypes.SET_EMAIL_STATE,
    payload: object
});

export const setContactSubject = object => ({
    type: contactTypes.SET_SUBJECT_STATE,
    payload: object
});

export const setContactBody = object => ({
    type: contactTypes.SET_BODY_STATE,
    payload: object
});

export const setContactStateNull = () => ({
    type: contactTypes.SET_CONTACT_STATE_NULL
});

export const toggleContactForm = () => ({
    type: contactTypes.TOGGLE_CONTACT_FORM
});