import React, { Component } from "react";
import Books from "./Books";

export default class BookShelf extends Component {
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
                  <Books books={book} currentArray={this.props.booksRead} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
