import { BOOKS_ACTION_TYPES } from "./books.types";

const INITIAL_STATE = {
	thrilogy: [],
	chapters: {},
	chapter: "",
};

export const BooksReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case BOOKS_ACTION_TYPES.SET_BOOKS:
			return { ...state, thrilogy: payload };
		case BOOKS_ACTION_TYPES.SET_CHAPTERS:
			return { ...state, chapters: { ...state.chapters, ...payload } };
		case BOOKS_ACTION_TYPES.SET_CHAPTER:
			return { ...state, chapter: payload };
		default:
			return state;
	}
};
