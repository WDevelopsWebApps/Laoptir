// const mapStateToProps = (state) => {
// 	return {
// 		books: state.books,
// 	};
// };

// export const selectBooks = (state) => {
// 	return { books: state.books };
// };

export const selectBooks = (state) => state.books;

// const mapDispatchToProps = {
// 	setBooks,
// };

// const connectToStore = connect(selectBooks, mapDispatchToProps);
// export default connectToStore(App);
