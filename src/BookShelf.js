import React, { Component } from "react";
import Books from "./Books";

export default class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.pushIt = this.pushIt.bind(this);
    this.arr = [];
  }

  pushIt(books, newCurrentArray, value) {
    this.props.removeFromCurShelf(books, newCurrentArray, value);
  }
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.booksCurRead.length >= 1 &&
                this.props.booksCurRead.map((book, index) => {
                  return (
                    <li key={index}>
                      <Books
                        books={book}
                        currentArray="booksCurRead"
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
            {this.props.booksWanToRead.length >= 1 &&
              this.props.booksWanToRead.map((book, index) => {
                return (
                  <li key={index}>
                    <Books
                      books={book}
                      currentArray="booksWanToRead"
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
            {this.props.booksRead.length >= 1 &&
              this.props.booksRead.map((book, index) => {
                return (
                  <li key={index}>
                    <Books
                      books={book}
                      currentArray="booksRead"
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
