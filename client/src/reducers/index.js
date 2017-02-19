import { combineReducers } from 'redux';
import logEvent from './event/log_event';
import comment from './event/comment';
import eventArray from './event/save_event';
import goals from './goals/goals';
import authentication from './auth/authentication'

export default combineReducers({
  comment,
  logEvent,
  eventArray,
  goals,
  authentication
})
