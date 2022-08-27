import styled from "styled-components";

export const CharacterWrapper = styled.div`
	background-color: #7937ab50;

	padding: 5rem 0 5rem;
	.searchCharacter {
		width: 30rem;
		border: none;
		font-size: 2rem;
		font-family: "Playfair Display", serif;
		margin: 1rem 0 2rem;
		/* background-color: #5f387d; */
	}

	.search {
		color: #ffffff;
		text-shadow: 1px 1px 2px black;
	}

	.big-heading {
		text-shadow: 1px 1px 2px black;
	}

	p {
		line-height: 2rem;
	}

	a {
		font-size: 2rem;
		text-decoration: none;
		color: #000000;
	}

	.characterDescription {
		background-color: #5f387d;
		text-align: left;
		width: 50rem;
		height: 20rem;
		margin: 1rem auto;
		padding: 1rem;
		border-radius: 8px;
		border: 0.1rem solid;

		.title {
			font-size: 1.6rem;
		}

		.color {
			color: #ddcee6;
			font-size: 1.6rem;
			padding-left: 1rem;
		}
	}
`;
