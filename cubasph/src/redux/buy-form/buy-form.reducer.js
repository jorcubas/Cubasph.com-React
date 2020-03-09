import BuyFormTypes from './buy-form.types';

const INITIAL_STATE = {
    hidden: false
}

const BuyContactReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case BuyFormTypes.TOGGLE_BUY_CONTACT_FORM:
            return{
                ...state, 
                hidden: !state.hidden
            }
        default: 
            return state;
    }
};

export default BuyContactReducer;