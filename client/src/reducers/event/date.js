import { SAVE_DATE } from '../../actions/index';

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

if (dd < 10) {dd = '0' + dd};
if (mm < 10) {mm = '0' + mm};

let dayString = `${yyyy}-${mm}-${dd}`

export default function (state=dayString, action) {
	switch(action.type) {
		case SAVE_DATE:
			return action.payload;
		default:
			return state;
	}	
}
