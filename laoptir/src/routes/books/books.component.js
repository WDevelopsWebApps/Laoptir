import React from "react";
import {
	setBooks,
	setChapters,
	setChapter,
} from "../../store/books/books.action";
import { connect } from "react-redux/";
import { DarkButton } from "../../components/button/button.styles";
import { BooksWrapper } from "./books.styles";
import Spinner from "../../components/spinner/spinner.component";
class Books extends React.Component {
	//api
	url = "https://the-one-api.dev/v2";

	updateChapters = async (id) => {
		const data = await fetch("api/book/" + id + "/chapter");
		const toJson = await data.json();
		const { docs } = toJson;
		const value = docs.map((chapter) => chapter.chapterName);
		await this.props.setChapters({ [id]: value });
	};

	updateBooks = async (url) => {
		const data = await fetch(url + "/book");
		const toJson = await data.json();
		const { docs } = toJson;
		const value = docs.map((item) => item);
		await this.props.setBooks(value);
		this.props.books.thrilogy.map((thrilogy) =>
			this.updateChapters(thrilogy._id)
		);
	};

	//set the display chapters after the button has been pressed
	displayChapters = (id) => {
		this.props.setChapter(
			this.props.books.chapters[id].map((chapter, i) => {
				return `${i + 1}: ${chapter}`;
			})
		);
	};

	componentDidMount() {
		if (this.props.books.thrilogy.length <= 1) {
			this.updateBooks(this.url);
		}
	}

	render() {
		return (
			<BooksWrapper>
				<div className="header">
					<h1 className="large-heading">
						L<span className="big-heading-api">a</span>o
						<span className="big-heading-api">p</span>t
						<span className="big-heading-api">i</span>r
					</h1>
					<div className="books">
						<p className="bookNames">Lord of the Rings includes 3 books: </p>
						{this.props.books.thrilogy[0] ? (
							<p className="bookNames">{`${this.props.books.thrilogy[0].name}, ${this.props.books.thrilogy[1].name} and ${this.props.books.thrilogy[2].name}`}</p>
						) : (
							<Spinner />
						)}
					</div>
					<h4 className="small-heading">Get Chapters for </h4>
					<DarkButton
						onClick={() => this.displayChapters("5cf5805fb53e011a64671582")}
					>
						Fellowship of the Ring
					</DarkButton>
					<DarkButton
						onClick={() => this.displayChapters("5cf58077b53e011a64671583")}
					>
						Two Towers
					</DarkButton>
					<DarkButton
						onClick={() => this.displayChapters("5cf58080b53e011a64671584")}
					>
						Return of the King
					</DarkButton>
				</div>
				<div className="chapters">
					{this.props.books.chapter !== ""
						? this.props.books.chapter.map((chapter, i) => (
								<p className={"chapter"} key={i}>
									{chapter}
								</p>
						  ))
						: ""}
				</div>
			</BooksWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
	};
};

const mapDispatchToProps = {
	setBooks,
	setChapters,
	setChapter,
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(Books);
