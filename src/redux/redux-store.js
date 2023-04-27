import {combineReducers, legacy_createStore as createStore}from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: navigationReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

window.store = store;

export default store;