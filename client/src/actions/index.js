import { browserHistory } from 'react-router';

/*/////////////////////////////////////////////
        LOG READING SESSION ACTIONS
/////////////////////////////////////////////*/

export const BOOK_INCREMENT = 'BOOK_INCREMENT';
export const bookIncrement = () => ({
    type: BOOK_INCREMENT
});

export const BOOK_DECREMENT = 'BOOK_DECREMENT';
export const bookDecrement = () => ({
    type: BOOK_DECREMENT
});

export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    payload: comment
});

export const SAVE_COMMENT = 'SAVE_COMMENT';
export const saveComment = (comment) => ({
    type: SAVE_COMMENT,
    payload: comment
});

export const SAVE_DATE = 'SAVE_DATE';
export const saveDate = (date) => ({
	type: SAVE_DATE,
	payload: date
});

export const SAVE_EVENT = 'SAVE_EVENT';
export const saveEvent = (event) => ({
	type: SAVE_EVENT,
	payload: event
})

export const CLEAR_EVENT = 'CLEAR_EVENT';
export const clearEvent = () => ({
    type: CLEAR_EVENT
})

/*/////////////////////////////////////////////
        SET READING GOAL ACTIONS
/////////////////////////////////////////////*/

export const BOOK_GOAL_INCREMENT = 'BOOK_GOAL_INCREMENT';
export const bookGoalIncrement = () => ({
    type: BOOK_GOAL_INCREMENT
});

export const BOOK_GOAL_DECREMENT = 'BOOK_GOAL_DECREMENT';
export const bookGoalDecrement = () => ({
    type: BOOK_GOAL_DECREMENT
});

export const DAY_GOAL_INCREMENT = 'DAY_GOAL_INCREMENT';
export const dayGoalIncrement = () => ({
    type: DAY_GOAL_INCREMENT
});

export const DAY_GOAL_DECREMENT = 'DAY_GOAL_DECREMENT';
export const dayGoalDecrement = () => ({
    type: DAY_GOAL_DECREMENT
});

/*/////////////////////////////////////////////
        AUTHORIZE USER ACTIONS
/////////////////////////////////////////////*/

export const AUTH_USER = 'AUTH_USER';
export const authUser = () => ({
    type: AUTH_USER
})

export const UNAUTH_USER = 'UNAUTH_USER';
export const unauthUser = () => ({
    type: UNAUTH_USER
})

export const AUTH_ERR = 'AUTH_ERROR';
export const authErr = () => ({
    type: AUTH_ERR
})

export function signinUser({ email, password }) {
    return function(dispatch) {
 
        // submit email & pw to server
        fetch('/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password})
        }).then(response => {
    
            return response.json();
       
        }).then(object => {

            // if success, update state to indicate user is authenticated
            dispatch({ type: AUTH_USER });

            // save jwt token from response 
            localStorage.setItem('token', object.token);

            //redirect to feature
            browserHistory.push('/progress');
        }).catch(response => {
            //request fails
            dispatch(authError('Bad Login info'))
        })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERR,
        payload: error
    }
}



