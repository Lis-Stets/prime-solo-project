import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// this saga will send the iten to add to the database
function* addItem(action) {
  try {
    console.log( 'in Add Item saga', action.payload );
    yield axios.post( '/api/items', action.payload );
    // yield put({ type: 'GET_ITEMS', payload: action.payload.id });
  } catch {
    console.log('Error Adding Item (Saga)');
  }
}//end addItem saga

function* addItemSaga() {
  yield takeEvery('ADD_ITEM', addItem);
}//end addItemSaga

export default addItemSaga;
