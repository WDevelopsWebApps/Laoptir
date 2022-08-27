import React from "react";
import {
	setCharacters,
	resetCharacters,
	setCharacterCount,
	setCurrentCharacters,
} from "../../store/characters/characters.action";
import { connect } from "react-redux";
import { CharactersListWrapper } from "./charactersList.styles";
import { Button, DarkButton } from "../button/button.styles";
import Spinner from "../spinner/spinner.component";

class CharactersList extends React.Component {
	//if fetching true
	loading = false;

	//api call
	fetchCharacters = async () => {
		this.loading = true;
		await this.props.resetCharacters();
		if (this.props.characters.all.length < 1) {
			const data = await fetch("api/character?sort=name:asc");
			const toJson = await data.json();
			await this.props.setCharacters(toJson.docs);
			this.loading = false;
			this.showCharacters();
		}
	};

	//display a list of characters on initial call, by default it will display 1
	showCharacters = () => {
		const standard = this.props.characters.all
			.filter((character, index) => index <= this.props.characters.count)
			.map((character) => character.name);
		this.props.setCurrentCharacters(standard);
	};

	//display next number of characters in the list based on given value
	nextCharacters = (value) => {
		const returnValue = this.props.characters.all
			.filter(
				(character, index) =>
					index <= this.props.characters.count + value &&
					this.props.characters.count < index
			)
			.map((character) => character.name);
		if (this.props.characters.count < this.props.characters.all.length) {
			this.props.setCharacterCount(this.props.characters.count + value);
			this.props.setCurrentCharacters(returnValue);
		}
	};
	previousCharacters = (value) => {
		const returnValue = this.props.characters.all
			.filter(
				(character, index) =>
					index <= this.props.characters.count - value &&
					this.props.characters.count - value - value < index
			)
			.map((character) => character.name);
		if (this.props.characters.count - value > -1) {
			this.props.setCharacterCount(this.props.characters.count - value);
			this.props.setCurrentCharacters(returnValue);
			console.log(this.props.characters.count);
		}
	};

	// check if characters reducer exist, if not fetch them
	componentDidMount() {
		if (this.props.characters.all.length === 0) {
			this.fetchCharacters();
		}
	}

	render() {
		return (
			<CharactersListWrapper>
				<h1 className="big-heading">Characters</h1>
				<DarkButton onClick={this.fetchCharacters}>
					Get/Reset Characters
				</DarkButton>
				{this.loading ? (
					<Spinner />
				) : (
					<>
						<div className="characters-list">
							{this.props.characters.currentCharacters.map(
								(character, index) => (
									<p className="characterText" key={index}>
										{character}
									</p>
								)
							)}
						</div>
						<div className="buttons">
							<div>
								<Button
									onClick={() => {
										this.nextCharacters(10);
									}}
								>
									Next 10 Characters
								</Button>
								<Button
									onClick={() => {
										this.nextCharacters(5);
									}}
								>
									Next 5 Characters
								</Button>
								<Button
									onClick={() => {
										this.nextCharacters(1);
									}}
								>
									Next Character
								</Button>
							</div>
							<div>
								<Button
									onClick={() => {
										this.previousCharacters(10);
									}}
								>
									Previous 10 Characters
								</Button>
								<Button
									onClick={() => {
										this.previousCharacters(5);
									}}
								>
									Previous 5 Characters
								</Button>
								<Button
									onClick={() => {
										this.previousCharacters(1);
									}}
								>
									Previous Character
								</Button>
							</div>
						</div>
					</>
				)}
			</CharactersListWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		characters: state.characters,
	};
};

export default connect(mapStateToProps, {
	setCharacters,
	resetCharacters,
	setCharacterCount,
	setCurrentCharacters,
})(CharactersList);
