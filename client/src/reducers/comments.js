import { SAVE_COMMENT } from '../actions/index';
import { CLEAR_EVENT } from '../actions/index';

export default function (state=[], action) {
	switch(action.type) {
		case SAVE_COMMENT:
			return [ ...state, action.payload ];
		case CLEAR_EVENT:
			return [];
		default: 
			return state;
	}
};