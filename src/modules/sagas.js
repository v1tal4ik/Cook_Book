import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {
    fetchCookListRequest,
    fetchCookListSuccess,
    fetchCookListFailure,
    fetchCookListByInputValueRequest,
    fetchCookListByInputValueSuccess,
    fetchCookListByInputValueFailure
  } from './actions';
import {getCookList,getCookListByInputValue} from '../api';


function* fetchReducersWatcher() {
  yield takeEvery(fetchCookListRequest, fetchCookListFlow);
  yield takeEvery(fetchCookListByInputValueRequest, fetchCookListByInputValueFlow);
}

export function* fetchCookListFlow(action) {
  try{
    const result = yield call(getCookList,action.payload);
    yield put(fetchCookListSuccess(result));
  } catch (error){
    yield put(fetchCookListFailure(error));
  }
}

export function* fetchCookListByInputValueFlow(action) {
  try{
    const result = yield call(getCookListByInputValue,action.payload);
    yield put(fetchCookListByInputValueSuccess(result));
  } catch (error){
    yield put(fetchCookListByInputValueFailure(error));
  }
}



export default function*() {
  yield fork(fetchReducersWatcher);
}