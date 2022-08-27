import React from "react";
import { connect } from "react-redux/es/exports";
import { CharactersWrapper } from "./characters.styles";
import { setCurrentCharacters } from "../../store/characters/characters.action";
import CharactersList from "../../components/charactersList/charactersList.component";
import Character from "../../components/character/character.component";

class Characters extends React.Component {
	componentDidMount() {
		if (this.props.characters.all.length > 0) {
			const standard = this.props.characters.all
				.filter(
					(character, index) =>
						index <= this.props.characters.count &&
						this.props.characters.count - 1 < index
				)
				.map((character) => character.name);
			this.props.setCurrentCharacters(standard);
		}
	}

	render() {
		return (
			<CharactersWrapper>
				<CharactersList />
				<Character />
			</CharactersWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		characters: state.characters,
	};
};

export default connect(mapStateToProps, {
	setCurrentCharacters,
})(Characters);
