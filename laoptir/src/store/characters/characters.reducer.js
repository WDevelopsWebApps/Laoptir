import { CHARACTERS_ACTION_TYPES } from "./characters.types";

const INITIAL_STATE = {
	all: [],
	count: 0,
	currentCharacters: [],
	character: [],
};

export const CharactersReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case CHARACTERS_ACTION_TYPES.SET_CHARACTERS:
			return { ...state, all: payload };
		case CHARACTERS_ACTION_TYPES.RESET_CHARACTERS:
			return { ...INITIAL_STATE };
		case CHARACTERS_ACTION_TYPES.SET_CHARACTER_COUNT:
			return { ...state, count: payload };
		case CHARACTERS_ACTION_TYPES.SET_CURRENT_CHARACTERS:
			return { ...state, currentCharacters: payload };
		case CHARACTERS_ACTION_TYPES.SET_CHARACTER:
			return { ...state, character: payload };
		default:
			return state;
	}
};
