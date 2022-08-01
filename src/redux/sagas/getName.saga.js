import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user
function* getName(action) {
  try {
    console.log('THIS IS THE ACTION.PAYLOAD', action.payload);
    const response = yield axios.get(`/api/closetbin/name/${action.payload}`);
    console.log( 'HERE IT ISSSSSSS in GET name saga', response.data );
    yield put({ type: 'SET_NAME', payload: response.data });
  } catch {
    console.log('Name axios.get request failed');
  }
}//end getName saga

function* getNameSaga() {
  yield takeEvery('GET_NAME', getName);
}//end getBinSaga

export default getNameSaga;
