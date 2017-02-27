import { SAVE_COMMENT } from '../../actions/index';
import { CLEAR_EVENT } from '../../actions/index';
import { DELETE_COMMENT } from '../../actions/index';

export default function (state=[], action) {
	switch(action.type) {
		case SAVE_COMMENT:
			return [ ...state, action.payload ];
		case CLEAR_EVENT:
			return [];
		case DELETE_COMMENT:
			console.log(action.payload)
			return [
		    ...state.slice(0, action.payload),
		    ...state.slice(action.payload + 1)];
		default: 
			return state;
	}
};