import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import {useSelector} from 'react-redux';
import thisViewIdReducer from '../reducers/thisViewId.reducer';

// this saga will send the iten to delete to the database
function* deleteItem(action) {

  try {
    console.log( 'in delete Item saga', action.payload.itemID );
    yield axios.delete( `/api/items/${action.payload.itemID}`  );
    yield put({ type: 'GET_ITEMS', payload: action.payload.viewID });
  } catch {
    console.log('Error deleting Item (Saga)');
  }
}//end deleteItem saga

function* deleteItemSaga() {
  yield takeEvery('DELETE_ITEM', deleteItem);
}//end deleteItemSaga

export default deleteItemSaga;
