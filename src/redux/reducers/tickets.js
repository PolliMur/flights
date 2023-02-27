import produce from 'immer';

import {
  GET_TICKETS_REQUESTED,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILED,
  SET_TICKETS,
} from '../types';

const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

const ticketsReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_TICKETS_REQUESTED:
      draft.error = null;
      draft.loading = true;
      break;

    case GET_TICKETS_SUCCESS:
      draft.loading = false;
      draft.tickets.push(...action.tickets);
      break;

    case GET_TICKETS_FAILED:
      draft.loading = false;
      draft.error = action.message;
      break;

    case SET_TICKETS:
      draft.tickets = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default ticketsReducer;
