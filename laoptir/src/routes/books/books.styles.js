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

		.large-heading {
			margin: 0;
		}

		.books {
			margin: 5rem 0 3rem;
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
	}
	.chapter {
		line-height: 3rem;
		font-size: 1.6rem;
	}
`;
