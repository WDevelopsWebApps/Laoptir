import styled from "styled-components";

export const FooterWrapper = styled.div`
	@media only screen and (max-width: 850px) {
		padding: 1rem 2rem;
	}

	padding: 2rem 5rem;
	background-color: #5f387d;
	opacity: 0.9;

	.footerText {
		@media only screen and (max-width: 850px) {
			font-size: 1.2rem;
		}
	}

	.footerLink {
		@media only screen and (max-width: 850px) {
			font-size: 1.2rem;
		}
		text-decoration: none;
		color: #8d8b8d;
	}
`;
