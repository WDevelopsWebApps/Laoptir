import { BOOKS_ACTION_TYPES } from "./books.types";

const INITIAL_STATE = {
	thrilogy: [],
};

export const booksReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case BOOKS_ACTION_TYPES.SET_BOOKS:
			return { ...state, thrilogy: payload };
		case BOOKS_ACTION_TYPES.RESET_BOOKS:
			return INITIAL_STATE;
		default:
			return state;
	}
};
