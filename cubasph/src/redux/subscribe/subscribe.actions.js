import {subscribeTypes}  from './subscribe.types';

export const setSubscribeEmail = object => ({
    type: subscribeTypes.SET_SUBSCRIBE_EMAIL,
    payload: object
});

export const subscribed = object => ({
    type: subscribeTypes.SUBSCRIBED,
    payload: object
});

