import {submissionTypes} from './submission.types';
import {addSubmission} from './submission.utils';

const INITIAL_STATE = {
    email: '',
    body: '',
};

const submissionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case submissionTypes.SET_EMAIL_SUBMISSION:
            return{
                ...state,
                email: action.payload
            }
        case submissionTypes.SET_BODY_SUBMISSION:
            return{
                ...state,
                body: action.payload
            }
            case submissionTypes.SET_SUBMISSION_NULL:
                return{
                    ...state,
                    email: '',
                    body: ''
                }            
        default:
            return state;
    }
};

export default submissionReducer; 