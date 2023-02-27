import produce from 'immer';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const index = draft.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      );

      if (index !== -1) {
        draft.cartItems[index].amount++;
        draft.totalAmount++;
        draft.totalPrice += draft.cartItems[index].price;

        break;
      }

      draft.cartItems.push({
        ...action.payload,
        amount: 1,
      });

      draft.totalAmount++;
      draft.totalPrice += action.payload.price;

      break;
    }

    case REMOVE_FROM_CART: {
      const { cartItemId, removeAll } = action.payload;

      const index = draft.cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      );

      if (draft.cartItems[index].amount === 1 || removeAll) {
        const deleted = draft.cartItems.splice(index, 1)[0];

        draft.totalAmount -= deleted.amount;
        draft.totalPrice -= deleted.price * deleted.amount;

        break;
      }

      draft.cartItems[index].amount--;
      draft.totalAmount--;
      draft.totalPrice -= draft.cartItems[index].price;

      break;
    }

    default:
      break;
  }
}, initialState);

export default cartReducer;
