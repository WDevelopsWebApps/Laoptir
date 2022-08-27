import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	text-decoration: none;
	flex-direction: column;
	text-align: center;
	h1 {
		font-size: 6.4rem;
		margin: 2rem 0 10rem;
	}
	h2 {
		font-size: 4.8rem;
		padding-bottom: 2rem;
	}
	h3 {
		font-size: 3.2rem;
		padding: 1rem 0;
	}
	.disclaimer {
		background-color: #0d0116;
		opacity: 0.8;
		width: fit-content;
		margin: 2rem auto;
		padding: 2rem 3rem;
		p {
			font-size: 2rem;
		}
	}

	.quote {
		text-align: start;
		background-color: #0d0116;
		padding: 2rem 10rem;
		width: fit-content;
		margin: 2rem auto;
	}
`;
