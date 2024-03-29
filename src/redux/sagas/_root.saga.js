import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import imageSaga from './image.saga';
import databaseImageSaga from './databaseImage.saga';
import getClosetSaga from './getCloset.saga';
import getBinSaga from './getBin.saga';
import addClosetBinSaga from './addClosetBin.saga';
import getItemsSaga from './getItems.saga';
import getSelectSaga from './getSelect.saga';
import addItemSaga from './addItem.saga';
import moveItemSaga from './moveItem.saga';
import deleteItemSaga from './deleteItem.saga';
import getNameSaga from './getName.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    databaseImageSaga(), // databaseImage saga is now registered
    imageSaga(), //  image saga is now registered
    registrationSaga(),
    userSaga(),
    getClosetSaga(),
    getBinSaga(),
    addClosetBinSaga(),
    getItemsSaga(),
    getSelectSaga(),
    addItemSaga(),
    moveItemSaga(),
    deleteItemSaga(),
    getNameSaga(),
  ]);
}
