import styled from "styled-components";

export const NavigationDiv = styled.div`
	position: relative;
`;

export const NavigationWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #5f387d;
	position: sticky;
	top: 0;
	z-index: 1;
	padding: 1rem;
	@media only screen and (max-width: 850px) {
		justify-content: space-around;
		align-items: center;
		padding: 0;
	}

	.big-heading {
		user-select: none;
		@media only screen and (max-width: 850px) {
			font-size: 2rem;
		}
	}

	.nav-links {
		@media only screen and (max-width: 850px) {
			font-size: 1.2rem;
			justify-content: center;
		}
		display: flex;
		justify-content: right;
		flex-grow: initial;
		font-size: 3.2rem;

		a {
			@media only screen and (max-width: 850px) {
				padding: 1rem;
			}
			text-decoration: none;
			color: aliceblue;
			padding: 0 5rem;
		}
		a:hover {
			color: #234567;
			cursor: pointer;
		}
	}
`;
