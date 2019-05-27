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
  }

  componentDidMount() {
    BooksAPI.getAll().then(book => {
      this.setState({
        books: book
      });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/search"
          render={props => <SearchBooks {...props} />}
        />
        <Route exact path="/" render={props => <BookList {...props} />} />
      </BrowserRouter>
    );
  }
}

export default BooksApp;
