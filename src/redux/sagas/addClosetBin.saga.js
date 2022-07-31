import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//this saga takes the input selected by the user and translates it into the values accepted by the database
function* setClosetOrBin(action) {
  // action.payload === 
  let closet = false;
  
  if(action.payload.closetOrBin === 'Closet'){
      closet = true;
      console.log( 'In Saga:',  action.payload.closetOrBin, 'closet has been set to:', closet );
    } 
    else if(action.payload.closetOrBin === 'Bin'){
      closet = false;
      console.log( 'In Saga:',  action.payload.closetOrBin, 'closet has been set to:', closet );
    }
  try {
    yield put({type: 'SET_CLOSET_OR_BIN', payload: closet });
  } catch {
  console.log('Error setting closet or Bin (Saga) Payload:', action.payload);
  }
}//end setClosetOrBin saga

// this saga will send the id of the user
function* addClosetBin(action) {
  try {
    console.log( 'in Add Closet/Bin saga', action.payload );
    yield axios.post( '/api/closetbin/add', action.payload );
    yield put({ type: 'GET_CLOSETS' });
    yield put({ type: 'GET_BINS' });
  } catch {
    console.log('Error Adding closet or Bin (Saga)');
  }
}//end addClosetBin saga

function* addClosetBinSaga() {
  yield takeEvery('CLOSET_OR_BIN', setClosetOrBin)
  yield takeEvery('ADD_CLOSET_BIN', addClosetBin);
}//end addClosetBinSaga

export default addClosetBinSaga;
