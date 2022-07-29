import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the iten to delete to the database
function* deleteItem(action) {
  try {
    console.log( 'in delete Item saga', action.payload );
    yield axios.post( '/api/items/:id', action.payload );
    yield put({ type: 'GET_ITEMS', payload: action.payload });
  } catch {
    console.log('Error deleting Item (Saga)');
  }
}//end deleteItem saga

function* deleteItemSaga() {
  yield takeEvery('DELETE_ITEM', deleteItem);
}//end deleteItemSaga

export default deleteItemSaga;
