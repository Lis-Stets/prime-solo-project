import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import closetReducer from './closet.reducer';
import binReducer from './bin.reducer';
import itemsReducer from './items.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  closetReducer, //will hold the closets of the logged in user to be displayed
  binReducer, //will hold the bins of the logged in user to be displayed
  itemsReducer, //will hold all items of the closet or bin clicked on by the user.
});

export default rootReducer;
