import { UserActionTypes } from './user.types';
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            // return necessary for everytimea
            // state in reducer is called
            return state;
    }
};

export default userReducer; 