import { SAVE_EVENT } from '../../actions/index';
import { UPDATE_ACTIVITY } from '../../actions/index';

export default function (state=[], action) {
	switch(action.type) {
		case SAVE_EVENT:
			return [ ...state, action.payload ];
		case UPDATE_ACTIVITY:
			return [ ...state, action.payload ];
		default: 
			return state;
	}
};