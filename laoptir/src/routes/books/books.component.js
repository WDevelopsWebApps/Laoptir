import React from "react";
import { setBooks } from "../../store/books/books.action";
import { connect } from "react-redux/";
import { selectBooks } from "../../store/books/books.selector";
import { Character } from "../character/character.component";
import { Link } from "react-router-dom";

class Books extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.updateBooks = this.updateBooks.bind(this);
	// }
	url = "https://the-one-api.dev/v2";

	updateBooks = async (url) => {
		const data = await fetch(url + "/book");
		const toJson = await data.json();
		const { docs } = toJson;
		const value = docs.map((item) => item.name);
		this.props.setBooks(value);
	};

	fetchBackend = async () => {
		const data = await fetch("/api/movie");
		const toJson = await data.json();
		console.log(toJson);
	};

	componentDidMount() {
		if (this.props.books.thrilogy.length <= 0) {
			this.updateBooks(this.url);
		}
		this.fetchBackend();
	}

	render() {
		return (
			<div>
				<h1 className="big-heading">
					L<span className="big-heading-api">a</span>o
					<span className="big-heading-api">p</span>t
					<span className="big-heading-api">i</span>r
				</h1>
				<Link to={"/character"}>Character</Link>
				<h3 className="small-heading">a LoTR fan page</h3>
				<img
					className="books"
					src={require("../../assets/books.jpg")}
					alt="books"
				></img>
				<p>Lord of the Rings includes 3 books: </p>
				<p>{`${this.props.books.thrilogy[0]}, ${this.props.books.thrilogy[1]} and ${this.props.books.thrilogy[2]}`}</p>
			</div>
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
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(Books);
