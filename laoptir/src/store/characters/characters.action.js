import { createAction } from "../../utils/reducer/reducer.utils";
import { CHARACTERS_ACTION_TYPES } from "./characters.types";

export const setCharacters = (characters) =>
	createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTERS, characters);

export const resetCharacters = () =>
	createAction(CHARACTERS_ACTION_TYPES.RESET_CHARACTERS);

export const setCharacterCount = (count) =>
	createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTER_COUNT, count);

export const setCurrentCharacters = (currentCharacters) =>
	createAction(
		CHARACTERS_ACTION_TYPES.SET_CURRENT_CHARACTERS,
		currentCharacters
	);

export const setCharacter = (character) =>
	createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTER, character);
