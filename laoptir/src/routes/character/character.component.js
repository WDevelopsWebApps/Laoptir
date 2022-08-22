import React from "react";
import { connect } from "react-redux/es/exports";
import { selectBooks } from "../../store/books/books.selector";
import { resetBooks } from "../../store/books/books.action";

class Character extends React.Component {
	resetBooks = () => {
		this.props.resetBooks();
	};

	getMovies = () => {};
	// componentDidMount() {
	// 	this.getBooks();
	// }
	render() {
		return (
			<div>
				<h1>Character</h1>
				<button onClick={this.resetBooks}>Get Books</button>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return { books: state.books };
// };

export default connect(selectBooks, { resetBooks })(Character);
