import { combineReducers } from "redux";
import { BooksReducer } from "./books/books.reducer";
import { CharactersReducer } from "./characters/characters.reducer";
import { MoviesReducer } from "./movies/movies.reducer";

export const rootReducer = combineReducers({
	books: BooksReducer,
	movies: MoviesReducer,
	characters: CharactersReducer,
});
