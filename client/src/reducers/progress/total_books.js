import { TOTAL_BOOKS } from '../../actions/index';

// returns a count that cannot go below 0 or above 15
export default function (state = 0, action) {
  switch (action.type) {
    case TOTAL_BOOKS:
      return action.payload
    default:
      return state
  }
}

