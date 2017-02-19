import { UPDATE_COMMENT } from '../../actions/index';
import { CLEAR_EVENT } from '../../actions/index';

export default function (state='', action) {
	switch(action.type) {
		case UPDATE_COMMENT:
			return action.payload;
		case CLEAR_EVENT:
			return '';
		default: 
			return state;
	}
};