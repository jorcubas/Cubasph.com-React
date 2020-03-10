import {createSelector} from 'reselect';

const selectSubmission = state => state.submission;

export const selectSubmissionEmail = createSelector(
    [selectSubmission],
    submission => submission.email
);


export const selectSubmissionBody = createSelector(
    [selectSubmission],
    submission => submission.body
);