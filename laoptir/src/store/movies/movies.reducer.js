import { MOVIES_ACTION_TYPES } from "./movies.types";

const INITIAL_STATE = {
	movies: [],
	quotes: [],
	quote: "",
};

export const MoviesReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case MOVIES_ACTION_TYPES.SET_MOVIES:
			return { ...state, movies: payload };
		case MOVIES_ACTION_TYPES.SET_QUOTES:
			return { ...state, quotes: { ...state.quotes, ...payload } };
		case MOVIES_ACTION_TYPES.SET_QUOTE:
			return { ...state, quote: payload };
		default:
			return state;
	}
};
