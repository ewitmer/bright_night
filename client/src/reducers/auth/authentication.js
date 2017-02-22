import { AUTH_USER } from '../../actions/index';
import { UNAUTH_USER } from '../../actions/index';
import { AUTH_ERR } from '../../actions/index';
import { FETCH_MSG } from '../../actions/index';


export default function(state = {authenticated: false}, action) {
	switch(action.type) {
		case AUTH_USER:
			return { ...state, error: null, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case AUTH_ERR:
			return { ...state, error: action.payload}
		case FETCH_MSG:
			return { ...state, message: action.payload}
		default: 
			return state;
	}
}