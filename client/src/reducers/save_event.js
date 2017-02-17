import { SAVE_EVENT } from '../actions/index';

export default function (state=[], action) {
	switch(action.type) {
		case SAVE_EVENT:
			return [ ...state, action.payload ];
		default: 
			return state;
	}
};