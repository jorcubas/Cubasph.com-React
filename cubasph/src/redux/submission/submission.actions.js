import {submissionTypes} from './submission.types';

export const setEmailSubmission = object => ({
    type: submissionTypes.SET_EMAIL_SUBMISSION,
    payload: object
});

export const setBodySubmission = object => ({
    type: submissionTypes.SET_BODY_SUBMISSION,
    payload: object
});