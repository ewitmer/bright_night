import { combineReducers } from 'redux';
import goalDays from './goal_days';
import goalBooks from './goal_books';

export default combineReducers({
  goalDays,
  goalBooks
})
