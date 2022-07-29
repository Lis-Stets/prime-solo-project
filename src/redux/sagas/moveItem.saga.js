import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the new closet or bin id to update the database
function* moveItem(action) {
  try {
    //what will go as the req.body vs the req.params
    console.log( 'in Move Item saga', action.payload );
    yield axios.post( '/api/items/post/:id', action.payload );
    yield put({ type: 'GET_ITEMS', payload: action.payload.id });
  } catch {
    console.log('Error Moving Item (Saga)');
  }
}//end moveItem saga

function* moveItemSaga() {
  // yield takeEvery('CLOSET_OR_BIN', setClosetOrBin)
  yield takeEvery('MOVE_ITEM', moveItem);
}//end moveItemSaga

export default moveItemSaga;
