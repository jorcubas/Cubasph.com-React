import {contactTypes} from './contact.types';

const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    body: '',
    hidden: false
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case contactTypes.SET_NAME_STATE:
            return{
                ...state,
                name: action.payload
            }

        case contactTypes.SET_EMAIL_STATE:
            return{
                ...state,
                email: action.payload
            }

        case contactTypes.SET_SUBJECT_STATE:
            return{
                ...state,
                subject: action.payload
            }

        case contactTypes.SET_BODY_STATE:
            return{
                ...state,
                body: action.payload
            }

        case contactTypes.SET_CONTACT_STATE_NULL:
            return{
                ...state,
                name: '',
                email: '',
                subject: '',
                body: ''
            }    

        case contactTypes.TOGGLE_CONTACT_FORM:
            return{
                ...state,
                hidden: !state.hidden
            }            
        
        default:
            return state;
    }
}

export default contactReducer;