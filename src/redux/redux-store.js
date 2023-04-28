import {applyMiddleware, combineReducers, legacy_createStore as createStore}from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: navigationReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;