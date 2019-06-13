import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import sagas from './sagas';
import {
    isLoading,
    typeSort,
    viewValue,
    cookList
    } from './reducers';

export default combineReducers({
    isLoading,
    typeSort,
    viewValue,
    cookList
});

export function* rootSaga() {
    yield fork(sagas);
}