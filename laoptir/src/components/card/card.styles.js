import styled from "styled-components";

export const ListOfMovies = styled.li`
	font-size: 1.6rem;
	line-height: 3rem;
`;

export const MovieSeriesDiv = styled.div`
	@media only screen and (max-width: 850px) {
		flex-direction: column;
	}
	display: flex;
	flex-direction: row;
	align-items: center;
	div {
		@media only screen and (max-width: 850px) {
			width: 90vw;
			margin: 1rem;
		}
		width: 50rem;
		margin: 3rem 3rem;
		overflow: hidden;
		background-color: #5f387d;
		border-radius: 10px;
		opacity: 0.8;
		:hover {
			opacity: 1;
		}
	}
	ul {
		text-decoration: none;
		margin: 2rem 0;
	}
`;
