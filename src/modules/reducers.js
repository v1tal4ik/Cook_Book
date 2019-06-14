import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    fetchCookListRequest,
    fetchCookListSuccess,
    fetchCookListFailure,
    fetchCookListByInputValueRequest,
    fetchCookListByInputValueSuccess,
    fetchCookListByInputValueFailure,
    changeSortType,
    changeViewValue
    } from './actions';


export const isLoading = handleActions({
    [fetchCookListRequest]     : ()=> true,
    [fetchCookListSuccess]     : ()=> false,
    [fetchCookListFailure]     : ()=> false,

    [fetchCookListByInputValueRequest]     : ()=> true,
    [fetchCookListByInputValueSuccess]     : ()=> false,
    [fetchCookListByInputValueFailure]     : ()=> false,
},false);

export const typeSort = handleActions({
    [changeSortType] : (_state,action)=>action.payload
},'newest');

export const viewValue = handleActions({
    [changeViewValue] : (_state,action)=>action.payload,
},8);

export const cookList = handleActions({
    [fetchCookListRequest] : ()=>[],
    [fetchCookListSuccess] : (_state,action)=>action.payload,
    [fetchCookListFailure] : (_state,action)=>action.payload,

    [fetchCookListByInputValueRequest] : ()=>[],
    [fetchCookListByInputValueSuccess] : (_state,action)=>action.payload,
    [fetchCookListByInputValueFailure] : (_state,action)=>action.payload,
},[]);



export default combineReducers({
    isLoading,
    typeSort,
    viewValue,
    cookList
});




export const getIsLoading=(state)=>state.isLoading;
export const getTypeSort=(state)=>state.typeSort;
export const getViewValue=(state)=>state.viewValue;
export const getCookList=(state)=>state.cookList;


