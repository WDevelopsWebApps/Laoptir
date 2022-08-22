import { BOOKS_ACTION_TYPES } from "./books.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setBooks = (books) =>
	createAction(BOOKS_ACTION_TYPES.SET_BOOKS, books);

export const resetBooks = () => createAction(BOOKS_ACTION_TYPES.RESET_BOOKS);
