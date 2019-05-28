import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import * as BooksAPI from "./BooksAPI";
export default class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: []
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const searchQuery = e.target.value;
    this.setState(
      {
        [e.target.name]: searchQuery
      }
      //   },
      //   () => {
      //     BooksAPI.search(this.state.query).then(data =>
      //       this.setState(
      //         {
      //           books: this.state.books.concat(data)
      //         },
      //         () => {
      //           console.log(data);
      //         }
      //       )
      //     );
      //   }
    );
    if (searchQuery) {
      BooksAPI.search(searchQuery.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ books })
          : this.setState({ books: [] });
      });
    } else this.setState({ newBooks: [] });
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
              onChange={this.handleOnChange}
              name="query"
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length >= 1 &&
              this.state.books.map(book => {
                return (
                  <li>
                    <Books
                      books={book}
                      curShelf="none"
                      title={book.title}
                      shelf={book.shelf}
                      changeShelf={this.props.changeShelf}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}
