import { connect } from "react-redux";
import React from "react";
import { Wrapper } from "./movies.styles";
import Card from "../../components/card/card.component";
import { setCharacters } from "../../store/characters/characters.action";
import Spinner from "../../components/spinner/spinner.component";
import { resetCharacters } from "../../store/characters/characters.action";
import { setMovies } from "../../store/movies/movies.action";

class Movies extends React.Component {
	//api calls
	fetchMovies = async () => {
		const data = await fetch("/api/movie");
		const toJson = await data.json();
		this.props.setMovies(toJson.docs);
	};

	//api calls
	fetchCharacters = async () => {
		const data = await fetch("/api/character");
		const toJson = await data.json();
		this.props.setCharacters(toJson.docs);
	};

	//based on character id inside movie quote, find the matching id inside the characters list which is a separate redux reducer
	findCharacter = () => {
		return this.props.characters.all
			.filter(
				(character) => character._id === this.props.movies.quote.character
			)
			.map((character) => character.name);
	};

	//check in redux, are characters and movies reducers empty, if empty fetch Api calls otherwise skip completely.
	async componentDidMount() {
		if (this.props.movies.movies.length <= 0) await this.fetchMovies();
		if (this.props.characters.all.length <= 0) await this.fetchCharacters();
	}

	render() {
		return (
			<Wrapper>
				<h1 className="large-heading">Movies</h1>
				{/* if no movie list is loaded yet by redux, show a Spinner component */}
				<h2 className="big-heading">
					{this.props.movies.movies.length > 0 ? (
						this.props.movies.movies[1].name
					) : (
						<Spinner />
					)}
				</h2>
				{/* Movies list includes 8 items. Cards from index 2 - 4 include the Hobbit series. */}
				<Card index={2} index1={5} />
				<div className="disclaimer">
					<p className="disclaimerText">
						Sadly as of right now, the Hobbit series doesn't include movie
						quotes. Currently, you are able only to generate quotes for the LoTR
						series.
					</p>
				</div>
				<h2 className="big-heading">
					{this.props.movies.movies.length > 0 ? (
						this.props.movies.movies[0].name
					) : (
						<Spinner />
					)}
				</h2>
				{/* Cards from index 5 and further include LoTR movies. */}
				<Card index={5} index1={this.props.movies.movies.length} />
				{/* show a quote using a combination of characters and movies reducers. The way the api is set it has a movie quote object which includes dialog, character id, etc... for it to make sense first finding character name by using the id and attaching it to dialog */}
				<div className="quote">
					{this.props.movies.quote ? (
						<p>
							<span className="characterName">{this.findCharacter()}</span>: "
							{this.props.movies.quote.dialog}""
						</p>
					) : (
						<Spinner />
					)}
				</div>
			</Wrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: state.movies,
	characters: state.characters,
});

export default connect(mapStateToProps, {
	setMovies,
	setCharacters,
	resetCharacters,
})(Movies);
