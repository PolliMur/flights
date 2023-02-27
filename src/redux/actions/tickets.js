import {
  GET_TICKETS_REQUESTED,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILED,
  SET_TICKETS,
} from '../types';

export const getTickets = (url, params) => ({
  type: GET_TICKETS_REQUESTED,
  payload: { url, params },
});

export const getTicketsSuccess = tickets => ({
  type: GET_TICKETS_SUCCESS,
  tickets,
});

export const getTicketsFailed = message => ({
  type: GET_TICKETS_FAILED,
  message,
});

export const setTickets = tickets => ({ type: SET_TICKETS, payload: tickets });
