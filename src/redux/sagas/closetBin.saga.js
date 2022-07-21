import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user
function* getClosetBins(action) {
  try {
    const response = yield axios.get(`/api/closetbin`);
    console.log( 'in GET closet bin saga', response.data )
    yield put({ type: 'SET_CLOSET_BINS', payload: response.data });
  } catch {
    console.log('ClosetBins axios.get request failed');
  }
}// end getClosetBins saga

function* closetBinSaga() {
  yield takeEvery('GET_CLOSET_BINS', getClosetBins);
}//end closetBinSaga

export default closetBinSaga;
