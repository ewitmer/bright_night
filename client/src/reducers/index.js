import { combineReducers } from 'redux';
import logEvent from './event/log_event';
import comment from './event/comment';
import eventArray from './event/save_event';
import goals from './goals/goals';
import authentication from './auth/authentication';
import response from './serv/response';
import totals from './progress/total_books';


export default combineReducers({
  comment,
  logEvent,
  eventArray,
  goals,
  authentication,
  response,
  totals
})
