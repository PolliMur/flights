import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_TICKETS_REQUESTED } from '../types';

import { getTicketsSuccess, getTicketsFailed } from '../actions/tickets';

import axiosInstance from '@utils/axiosInstance';

function* requestTickets(action) {
  const { url, params } = action.payload;

  try {
    const tickets = yield call(axiosInstance.get, url, { params });

    yield put(getTicketsSuccess(tickets));
  } catch (error) {
    yield put(getTicketsFailed(error.message));
  }
}

function* ticketsSaga() {
  yield takeEvery(GET_TICKETS_REQUESTED, requestTickets);
}

export default ticketsSaga;
