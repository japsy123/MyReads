import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
export default class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: ""
    };
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.bookId}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}
