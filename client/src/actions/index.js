
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

export const CHANGE_AUTH = 'CHANGE_AUTH';
export const authenticate = (isLoggedIn) => ({
    type: CHANGE_AUTH,
    payload: isLoggedIn
})


