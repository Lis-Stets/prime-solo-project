import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import closetReducer from './closet.reducer';
import binReducer from './bin.reducer';
import addClosetBinReducer from './addClosetBin.reducer';
import itemsReducer from './items.reducer';
import selectReducer from './select.reducer';
import thisViewIdReducer from './thisViewId.reducer';
import nameReducer from './name.reducer';
import imageReducer from './image.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  addClosetBinReducer, //will hold the type to add selected by the user
  closetReducer, //will hold the closets of the logged in user to be displayed
  binReducer, //will hold the bins of the logged in user to be displayed
  itemsReducer, //will hold all items of the closet or bin clicked on by the user
  selectReducer, //will hold closets and bins to be displayed in the move item select input
  thisViewIdReducer, //will hold the id of the closet or bin being viewed by the user
  nameReducer, //will hold the name of the closet or bin being viewed by the user
  imageReducer, //
});

export default rootReducer;
