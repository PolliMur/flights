import { combineReducers } from 'redux';

import ticketsReducer from './tickets';
import cartReducer from './cart';
import themeReducer from './theme';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  cart: cartReducer,
  theme: themeReducer,
});

export default rootReducer;
