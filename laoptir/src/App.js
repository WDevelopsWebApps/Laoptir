import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./routes/books/books.component";
import Character from "./routes/character/character.component";
export class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Books />} />
				<Route path="/character" element={<Character />} />
			</Routes>
		);
	}
}

export default App;
