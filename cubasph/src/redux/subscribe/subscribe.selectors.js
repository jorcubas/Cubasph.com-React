import {createSelector} from 'reselect';

const selectSubscribe = state => state.subscribe;

export const selectSubscribeEmail= createSelector(
    [selectSubscribe],
    subscribe => subscribe.email
);

export const selectSubscribed= createSelector(
    [selectSubscribe],
    subscribe => subscribe.subscribed
);
