import styled from "styled-components";

export const CharactersListWrapper = styled.div`
	.characters-list {
		@media only screen and (max-width: 850px) {
			width: 80vw;
		}

		background-color: #5f387d;
		width: 50rem;
		height: 27rem;
		margin: 2rem auto;
		padding: 10px;
		border-radius: 8px;
		border: 0.1rem solid;

		.character-text {
			@media only screen and (max-width: 850px) {
				font-size: 1.6rem;
			}
			font-size: 2rem;
		}
	}

	.buttons {
		display: grid;
	}
`;
