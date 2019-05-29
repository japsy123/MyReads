import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BookList from "./BookList";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.changeShelf = this.changeShelf.bind(this);
  }

  componentDidMount() {
    // Getting all the books using the BooksAPI
    BooksAPI.getAll().then(book => {
      this.setState(
        {
          books: book
        },
        () => {
          // console.log(this.state.books);
        }
      );
    });
  }

  changeShelf(bookToChange, shelf) {
    // console.log(bookToChange);
    // console.log(shelf);
    // Using update API to update the book'shelf
    BooksAPI.update(bookToChange, shelf).then(response => {
      bookToChange.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          // Filtering the book from array and then adding using concat
          .filter(book => book.id !== bookToChange.id)
          .concat(bookToChange)
      }));
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/search"
          render={props => (
            <SearchBooks
              {...props}
              mainBooks={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <BookList
              {...props}
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default BooksApp;
