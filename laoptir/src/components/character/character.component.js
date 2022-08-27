import React from "react";
import { CharacterWrapper } from "./character.styles";
import { setCharacter } from "../../store/characters/characters.action";
import { connect } from "react-redux";

class Character extends React.Component {
	//helper function
	capitalize(value) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}

	// find the character based on search params and set reducer
	searchCharacter = (e) => {
		this.characterProps = [];
		const value = e.target.value.toLowerCase();
		const character = this.props.characters.all.filter(
			(character) =>
				character.name.toLowerCase().includes(value) ||
				character.race.includes(value)
		);
		this.props.setCharacter(character);
	};

	render() {
		return (
			<CharacterWrapper>
				<h2 className="big-heading">Character</h2>
				<p className="search">Search for a character</p>
				<input
					className="searchCharacter"
					onChange={this.searchCharacter}
					type={"text"}
					name={"search"}
					id="search"
					list="search-list"
				/>
				{/* show a suggested dropdown list based on typed characters */}
				<datalist id="search-list">
					{this.props.characters.character.length > 0
						? this.props.characters.character.map((character, key) => (
								<option key={key + 10}>{character.name}</option>
						  ))
						: ""}
				</datalist>
				{this.props.characters.character.length > 0 ? (
					<div className="characterDescription">
						<table>
							<tbody>
								{Object.keys(this.props.characters.character[0])
									.filter(
										(key) =>
											!key.includes("_id") &&
											this.props.characters.character[0][key].length > 0 &&
											this.props.characters.character[0][key] !== "NaN"
									)
									.map((key, index) => {
										if (key.includes("wiki")) {
											return (
												<tr key={index}>
													<td key={index + 1} className="title">
														Wiki{" "}
													</td>
													<td key={index + 2} className="color">
														<a
															key={index + 3}
															href={this.props.characters.character[0][key]}
															alt={"Wiki Url"}
														>
															{this.props.characters.character[0][key]}
														</a>
													</td>
												</tr>
											);
										} else {
											return (
												<tr key={index + 11}>
													<td className="title" key={index + 10}>
														{this.capitalize(key)}
													</td>
													<td className="color" key={index + 7}>
														{this.props.characters.character[0][key]}
													</td>
												</tr>
											);
										}
									})}
							</tbody>
						</table>
					</div>
				) : (
					""
				)}
			</CharacterWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		characters: state.characters,
	};
};

export default connect(mapStateToProps, {
	setCharacter,
})(Character);
