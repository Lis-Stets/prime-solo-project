import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user
function* getSelect(action) {
  try {
    const response = yield axios.get(`/api/closetbin/select/${action.payload}`);
    console.log( 'in GET select saga', response.data )
    yield put({ type: 'SET_SELECT', payload: response.data });
  } catch {
    console.log('Select axios.get request failed');
  }
}//end getBin saga

function* getSelectSaga() {
  yield takeEvery('GET_SELECT', getSelect);
}//end getBinSaga

export default getSelectSaga;
