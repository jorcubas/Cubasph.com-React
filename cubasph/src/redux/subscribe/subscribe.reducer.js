import {subscribeTypes} from './subscribe.types.js';


const INITIAL_STATE = {
    email: '',
    subscribed: 'NOT_REGISTERED'
};

const subscribeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case subscribeTypes.SET_SUBSCRIBE_EMAIL:
            return{
                ...state,
                email: action.payload
            }
        default: 
            return state;
    }
}

export default subscribeReducer;