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
              {this.props.booksRead.map(book => {
                return <Books />;
              })}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Reading</h2>
          <div className="bookshelf-books" />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books" />
        </div>
      </div>
    );
  }
}
