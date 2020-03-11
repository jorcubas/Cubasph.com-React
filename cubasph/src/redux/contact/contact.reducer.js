import {contactTypes} from './contact.types';

const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    body: ''
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch(action.types){
        case contactTypes.SET_NAME_STATE:
            return{
                ...state,
                name: action.payload
            }

        case contactTypes.SET_EMAIL_STATE:
            return{
                ...state,
                name: action.payload
            }

        case contactTypes.SET_SUBJECT_STATE:
            return{
                ...state,
                name: action.payload
            }

        case contactTypes.SET_BODY_STATE:
            return{
                ...state,
                name: action.payload
            }

        default:
            return state;
    }
}

export default contactReducer;