import { createAction } from 'redux-actions';


export const fetchCookListRequest = createAction('FETCH_COOK_LIST');
export const fetchCookListSuccess = createAction('FETCH_COOK_LIST_SUCCESS');
export const fetchCookListFailure = createAction('FETCH_COOK_LIST_FAILURE');

export const fetchCookListByInputValueRequest = createAction('FETCH_COOK_LIST_BY_INPUT_VALUE');
export const fetchCookListByInputValueSuccess = createAction('FETCH_COOK_LIST_BY_INPUT_VALUE_SUCCESS');
export const fetchCookListByInputValueFailure = createAction('FETCH_COOK_LIST_BY_INPUT_VALUE_FAILURE');


export const changeSortType = createAction('CHANGE_SORT_TYPE');
export const changeViewValue = createAction('CHANGE_VIEW_VALUE');
