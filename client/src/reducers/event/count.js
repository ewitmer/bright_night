import { BOOK_INCREMENT } from '../../actions/index';
import { BOOK_DECREMENT } from '../../actions/index';
import { CLEAR_EVENT } from '../../actions/index';

// returns a count that cannot go below 0
export default function (state = 0, action) {
  switch (action.type) {
    case BOOK_INCREMENT:
      return state + 1
    case BOOK_DECREMENT:
      return Math.max(state - 1, 0)
    case CLEAR_EVENT:
    	return 0
    default:
      return state
  }
}