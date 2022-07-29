import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// //this saga takes the input selected by the user and translates it into the values accepted by the database
// function* setClosetOrBin(action) {
//   // action.payload === 
//   let closet = false;
  
//   if(action.payload.closetOrBin === 'Closet'){
//       closet = true;
//       console.log( 'In Saga:',  action.payload.closetOrBin, 'closet has been set to:', closet );
//     } 
//     else if(action.payload.closetOrBin === 'Bin'){
//       closet = false;
//       console.log( 'In Saga:',  action.payload.closetOrBin, 'closet has been set to:', closet );
//     }
//   try {
//     yield put({type: 'SET_CLOSET_OR_BIN', payload: closet });
//   } catch {
//   console.log('Error setting closet or Bin (Saga) Payload:', action.payload);
//   }
// }//end setClosetOrBin saga

console.log('');

// this saga will send the iten to add to the database
function* addItem(action) {
  try {
    console.log( 'in Add Item saga', action.payload );
    yield axios.post( '/api/items/add/:id', action.payload );
    yield put({ type: 'GET_ITEMS', payload: action.payload });
  } catch {
    console.log('Error Adding Item (Saga)');
  }
}//end addItem saga

function* addItemSaga() {
  // yield takeEvery('CLOSET_OR_BIN', setClosetOrBin)
  yield takeEvery('ADD_ITEM', addItem);
}//end addItemSaga

export default addItemSaga;
