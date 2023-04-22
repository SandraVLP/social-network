import {combineReducers, legacy_createStore as createStore}from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';

const reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: navigationReducer
})

const store = createStore(reducers);

export default store;