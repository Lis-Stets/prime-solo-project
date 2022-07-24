import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user
function* getCloset(action) {
  try {
    const response = yield axios.get(`/api/closet`);
    console.log( 'in GET closet saga', response.data )
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } catch {
    console.log('Closet axios.get request failed');
  }
}//end getCloset saga

function* getClosetSaga() {
  yield takeEvery('GET_CLOSETS', getCloset);
}//end getClosetSaga

export default getClosetSaga;
