import styled from "styled-components";
import booksImg from "../../assets/books.jpg";

export const BooksWrapper = styled.div`
	background-image: url(${booksImg});
	background-position: center;
	background-size: cover;
	text-align: center;
	padding-bottom: 3rem;

	.header {
		background-color: #2a0944;
		width: 40vw;
		margin: 0 auto 10rem;
		@media only screen and (max-width: 850px) {
			width: 80vw;
			margin: 0 auto 5rem;
		}

		.large-heading {
			margin: 0;
		}

		.books {
			margin: 5rem 0 3rem;
			overflow: hidden;
			word-wrap: break-word;
			overflow-wrap: break-word;
			overflow: auto;
			width: 100%;
		}

		.bookNames {
			@media only screen and (max-width: 850px) {
				font-size: 1.2rem;
				line-height: 1.6;
			}
			word-wrap: break-word;
		}

		.medium-heading {
			margin: 2rem 0;
		}

		.small-heading {
			margin: 1rem 0;
		}
	}

	.chapters {
		background-color: #5f387d;
		width: 40vw;
		margin: 10rem auto 0;
		border-radius: 8px;
		@media only screen and (max-width: 850px) {
			width: 80vw;
			margin: 0 auto;
		}
	}
	.chapter {
		line-height: 3rem;
		font-size: 1.6rem;
	}
`;
