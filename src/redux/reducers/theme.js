import produce from 'immer';

import { SWITCH_THEME } from '../types';

const initialState = {
  currentTheme: '',
};

const themeReducer = produce((draft, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      draft.currentTheme = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default themeReducer;
