import { all } from 'redux-saga/effects';

import ticketsSaga from './tickets';

function* rootSaga() {
  yield all([ticketsSaga()]);
}

export default rootSaga;
