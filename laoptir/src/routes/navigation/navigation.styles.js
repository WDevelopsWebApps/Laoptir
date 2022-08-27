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

	.big-heading {
		user-select: none;
	}

	.nav-links {
		display: flex;
		justify-content: right;
		flex-grow: initial;
		font-size: 3.2rem;

		a {
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
