import React from "react";
import { connect } from "react-redux";
import { MovieSeriesDiv, ListOfMovies } from "./card.styles";
import { setQuote, setQuotes } from "../../store/movies/movies.action";
import { Button } from "../button/button.styles";

class Card extends React.Component {
	//api call
	fetchQuotes = async (id) => {
		if (this.props.movies.quotes[id] === undefined) {
			const data = await fetch(`/api/movie/${id}/quote`);
			const toJson = await data.json();
			this.props.setQuotes({ [id]: toJson.docs });
		}
	};

	//based on the length of all quotes, generate a random number and set a quote
	generateRandomMovieQuote = async (id) => {
		const quotes = this.props.movies.quotes[id].length;
		const getNumber = Math.random() * quotes;
		const getNumberFloor = Math.floor(getNumber);
		this.props.setQuote(this.props.movies.quotes[id][getNumberFloor]);
	};

	//just a function which converts a key e.g "runTimeInMinutes" into "Runtime in minutes"
	regularText(text) {
		const addSpace = text.replace(/([A-Z])/g, " $1");
		const lower = addSpace.toLowerCase();
		const first = lower.charAt(0).toUpperCase() + lower.slice(1);
		return first;
	}

	componentDidUpdate(prevProps) {
		//api includes movie quotes only for LoTR series.
		const key = Object.keys(this.props.movies.movies[5]);
		if (key.includes("name") && this.props.movies.quotes.length === 0) {
			this.props.movies.movies.map((movie, i) => {
				if (i > 4) {
					return this.fetchQuotes(movie._id);
				}
				return {};
			});
		}
		if (
			this.props.movies.quote === "" &&
			Object.keys(this.props.movies.quotes).length > 0
		) {
			this.generateRandomMovieQuote("5cd95395de30eff6ebccde5c");
		}
	}

	render() {
		return (
			<MovieSeriesDiv>
				{/*initially find all movies, after that based on card indexes filter through them, for each movie make a list which shows all of the properties exluding only the id. */}
				{this.props.movies.movies
					.filter(
						(movie, index) =>
							index >= this.props.index && index < this.props.index1
					)
					.map((movie, i) => (
						<div key={movie._id + i}>
							<ul key={movie._id + i + 2}>
								{Object.keys(movie)
									.filter((key) => key !== "_id")
									.map((key, i) => {
										let keyName = this.regularText(key);
										if (key === "name") {
											return (
												<h3 className="medium-heading" key={movie._id + i + 5}>
													{movie[key]}
												</h3>
											);
										}
										if (
											this.props.index > 4 &&
											this.props.index < this.props.movies.movies.length &&
											key === "rottenTomatoesScore"
										) {
											return (
												<ListOfMovies key={movie._id + i + 7}>
													<p key={movie._id + i + 3}>
														{keyName} {movie[key]}{" "}
													</p>
													<Button
														key={movie._id + i + 1}
														onClick={() =>
															this.generateRandomMovieQuote(movie._id)
														}
													>
														Generate an quote
													</Button>
												</ListOfMovies>
											);
										}
										return (
											<ListOfMovies key={movie._id + i + 4}>
												{keyName} {movie[key]}{" "}
											</ListOfMovies>
										);
									})}
							</ul>
						</div>
					))}
			</MovieSeriesDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
	};
};

export default connect(mapStateToProps, {
	setQuote,
	setQuotes,
})(Card);
