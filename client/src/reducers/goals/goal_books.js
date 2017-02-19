import { BOOK_GOAL_INCREMENT } from '../../actions/index';
import { BOOK_GOAL_DECREMENT } from '../../actions/index';


// returns a count that cannot go below 0 or above 15
export default function (state = 0, action) {
  switch (action.type) {
    case BOOK_GOAL_INCREMENT:
      return Math.min(state + 1, 15)
    case BOOK_GOAL_DECREMENT:
      return Math.max(state - 1, 0)
    default:
      return state
  }
}


