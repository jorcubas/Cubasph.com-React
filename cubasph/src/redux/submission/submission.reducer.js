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
        default:
            return state;
    }
};

export default submissionReducer; 