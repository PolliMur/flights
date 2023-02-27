import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

export const addToCart = cartItem => ({
  type: ADD_TO_CART,
  payload: cartItem,
});

export const removeFromCart = (cartItemId, removeAll = false) => ({
  type: REMOVE_FROM_CART,
  payload: { cartItemId, removeAll },
});
