import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the closet or bin
function* getItems(action) {
  try {
    const response = yield axios.get(`/api/items/${action.payload}`);
    console.log( 'in GET items saga', response.data )
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch {
    console.log('Items axios.get request failed');
  }
}//end getItems saga

function* getItemsSaga() {
  yield takeEvery('GET_ITEMS', getItems);
}//end getBinSaga

export default getItemsSaga;
