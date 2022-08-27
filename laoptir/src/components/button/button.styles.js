import styled from "styled-components";

export const Button = styled.button`
	margin: 1rem;
	border: none;
	border-radius: 10px;
	width: 20rem;
	font-size: 1.6rem;
	font-family: "Playfair Display", serif;
	color: white;
	height: 4rem;
	background-color: #2a0944;
	transition: all, 0.3s;
	:hover {
		filter: brightness(1.4);
		transform: translate(-0.4rem, -0.4rem);
	}
	:active {
		transform: translate(0, 0);
	}
`;

export const DarkButton = styled(Button)`
	background-color: #8b59b1;
	color: aliceblue;
`;
