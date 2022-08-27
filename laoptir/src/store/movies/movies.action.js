import { createAction } from "../../utils/reducer/reducer.utils";
import { MOVIES_ACTION_TYPES } from "./movies.types";

export const setMovies = (movies) =>
	createAction(MOVIES_ACTION_TYPES.SET_MOVIES, movies);

export const setQuotes = (quotes) =>
	createAction(MOVIES_ACTION_TYPES.SET_QUOTES, quotes);

export const setQuote = (quote) =>
	createAction(MOVIES_ACTION_TYPES.SET_QUOTE, quote);
