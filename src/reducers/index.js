import { combineReducers } from '@reduxjs/toolkit';
import nameReducer from './nameReducer';
import countReducer from './countReducer';

export const rootReducer = combineReducers({
    nameReducer,
    countReducer

});
