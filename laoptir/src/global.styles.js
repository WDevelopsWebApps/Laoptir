import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display&display=swap");

/* Reset padding and margin to 0 */
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

/* Set font size to 10 px and box sizing to border box */
html {
	font-size: 62.5%;
	box-sizing: border-box;
}

/* regular font */
body {
	font-family: "Lato", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #2a0944;
	/* background-color: #949197; */
	color: aliceblue;
}

/* heading font */
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Playfair Display", serif;
}

p {
	font-size: 1.6rem;
}

.large-heading {
	@media only screen and (max-width: 850px) {
		font-size: 4.8rem;
		margin: 1rem 0 5rem;
	}
	font-size: 6.4rem;
	margin: 2rem 0 10rem;
}

.big-heading-api {
	color: #757079;
}

.big-heading {
	font-size: 4.8rem;
	padding-bottom: 2rem;
}
.medium-heading {
	font-size: 3.2rem;
	padding: 1rem 0;
}

.small-heading {
	font-size: 2.4rem;
}

.books {
	width: 60rem;
}
`;
