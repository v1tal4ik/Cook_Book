import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import CookListItem from './CookListItem';
import configureStore from 'redux-mock-store'
 





describe('CookListItem',()=>{
    const initialState = {}; 
    const mockStore = configureStore();
    let testCookListItem;
    let store;
    const props = {
        id:0,
        name: 'test name',
        date: '2016-09-09',
        img: 'cookIcon/test.png',
        description: 'test description',
    }
    
    beforeAll(() => {
      store = mockStore(initialState)
      testCookListItem = mount(<Provider store={store}> <CookListItem {...props}/> </ Provider>)
     });
    it('correct name render',()=>{
        expect(testCookListItem.find('#name').text()).toEqual('test name');
    });

    it('correct date render',()=>{
        expect(testCookListItem.find('#date').text()).toEqual('(2016-09-09)');
    });

    it('correct img prop',()=>{
        expect(testCookListItem.find('#img').prop('src')).toEqual('cookIcon/test.png');
    });
});
