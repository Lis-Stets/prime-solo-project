import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user
function* getBin(action) {
  try {
    const response = yield axios.get(`/api/closetbin/bin`);
    console.log( 'in GET bin saga', response.data )
    yield put({ type: 'SET_BIN', payload: response.data });
  } catch {
    console.log('Closet axios.get request failed');
  }
}//end getBin saga

function* getBinSaga() {
  yield takeEvery('GET_BINS', getBin);
}//end getBinSaga

export default getBinSaga;
