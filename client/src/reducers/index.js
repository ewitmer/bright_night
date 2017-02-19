import { combineReducers } from 'redux';
import logEvent from './event/log_event';
import comment from './event/comment';
import eventArray from './event/save_event';
import goals from './goals/goals';
import authentication from './auth/authentication'
import { reducer as form } from 'redux-form';

export default combineReducers({
  form,
  comment,
  logEvent,
  eventArray,
  goals,
  authentication
})
