import React from 'react';
//Import all reducers here
import counterReducer from './counter';
import loggedReducer from './isLogged';
//Import everything redux related
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged : loggedReducer
});

export default allReducers;