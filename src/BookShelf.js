import React, { Component } from "react";
import Books from "./Books";

export default class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.pushIt = this.pushIt.bind(this);
  }

  pushIt(books, currentArray, value) {
    this.props.removeFromCurShelf(books, currentArray, value);
  }
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.booksCurRead.map((book, index) => {
                return (
                  <li key={index}>
                    <Books
                      books={book}
                      currentArray={this.props.booksCurRead}
                      pushIt={this.pushIt}
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Reading</h2>
          <div className="bookshelf-books" />
          <ol className="books-grid">
            {this.props.booksWanToRead.map((book, index) => {
              return (
                <li key={index}>
                  <Books
                    books={book}
                    currentArray={this.props.booksWanToRead}
                    pushIt={this.pushIt}
                  />
                </li>
              );
            })}
          </ol>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books" />
          <ol className="books-grid">
            {this.props.booksRead.map((book, index) => {
              return (
                <li key={index}>
                  <Books
                    books={book}
                    currentArray={this.props.booksRead}
                    pushIt={this.pushIt}
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
