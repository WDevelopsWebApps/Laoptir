import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	text-decoration: none;
	flex-direction: column;
	text-align: center;
	.large-heading {
		@media only screen and (max-width: 850px) {
			font-size: 4.8rem;
			margin: 1rem 0 5rem;
		}
		font-size: 6.4rem;
		margin: 2rem 0 10rem;
	}
	.big-heading {
		@media only screen and (max-width: 850px) {
			font-size: 3.2rem;
			padding-bottom: 1rem;
		}
		font-size: 4.8rem;
		padding-bottom: 2rem;
	}
	.medium-heading {
		@media only screen and (max-width: 850px) {
			font-size: 2.8rem;
		}
		font-size: 3.2rem;
		padding: 1rem 0;
	}
	.disclaimer {
		background-color: #0d0116;
		opacity: 0.8;
		width: fit-content;
		margin: 2rem auto;
		padding: 2rem 3rem;
		.dislaimerText {
			font-size: 2rem;
		}
	}

	.quote {
		@media only screen and (max-width: 850px) {
			width: 90vw;
			padding: 3rem;
		}
		text-align: start;
		background-color: #0d0116;
		padding: 2rem 10rem;
		width: fit-content;
		margin: 2rem auto;
	}

	.characterName {
		color: #5f387d;
	}
`;
