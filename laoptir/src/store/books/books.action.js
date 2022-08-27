import { BOOKS_ACTION_TYPES } from "./books.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setBooks = (books) =>
	createAction(BOOKS_ACTION_TYPES.SET_BOOKS, books);

export const setChapters = (chapters) =>
	createAction(BOOKS_ACTION_TYPES.SET_CHAPTERS, chapters);

export const setChapter = (chapter) =>
	createAction(BOOKS_ACTION_TYPES.SET_CHAPTER, chapter);
