import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user
function* addClosetBin(action) {
  try {
    console.log( 'in Add Closet/Bin saga', action.payload );
    yield axios.post( '/api/closet/add', action.payload );
    yield put({ type: 'GET_CLOSETS' });
    yield put({ type: 'GET_BINS' });
  } catch {
    console.log('Error Adding closet or Bin (Saga)');
  }
}//end addClosetBin saga

function* addClosetBinSaga() {
  yield takeEvery('ADD_CLOSET_BIN', addClosetBin);
}//end addClosetBinSaga

export default addClosetBinSaga;
