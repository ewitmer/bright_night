import { combineReducers } from 'redux';
import logEvent from './log_event';
import comment from './comment';
import eventArray from './save_event';
import goals from './goals';
import authentication from './authentication'

export default combineReducers({
  comment,
  logEvent,
  eventArray,
  goals,
  authentication
})
