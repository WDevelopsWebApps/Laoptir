import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./routes/books/books.component";
import Character from "./routes/characters/characters.component";
import Movies from "./routes/movies/movies.component";
import { Navigation } from "./routes/navigation/navigation.component";
import Footer from "./components/footer/footer.component";
export class App extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<Routes>
					<Route path="/" element={<Books />} />
					<Route path="/characters" element={<Character />} />
					<Route path="/movies" element={<Movies />} />
				</Routes>
				<Footer />
			</>
		);
	}
}

export default App;
