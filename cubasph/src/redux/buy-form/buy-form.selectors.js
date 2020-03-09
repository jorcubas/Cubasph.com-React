import {createSelector} from 'reselect';

const selectBuyForm = state => state.buyForm;

// export const selectCartItems = createSelector(
//     [selectCart],
//     cart => cart.cartItems
// );

export const selectBuyFormHidden = Param => createSelector(
    [selectBuyForm],
    buyForm => (buyForm.hidden ? true : false)
)
