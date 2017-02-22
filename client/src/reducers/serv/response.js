import { SUCCESS_MSG } from '../../actions/index';
import { CLEAR_EVENT } from '../../actions/index';

export default function (state='', action) {
	switch(action.type) {
		case SUCCESS_MSG:
			return action.payload;
		case CLEAR_EVENT:
			return '';
		default: 
			return state;
	}
};