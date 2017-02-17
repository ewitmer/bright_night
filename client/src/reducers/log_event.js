import { combineReducers } from 'redux';
import commentArray from './comments';
import counter from './count';
import date from './date';


export default combineReducers ({
  commentArray,
  counter,
  date,
})
