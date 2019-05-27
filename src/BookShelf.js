import React, { Component } from "react";
import Books from "./Books";

export default class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.pushIt = this.pushIt.bind(this);
    this.arr = [];
  }

  pushIt(books, curShelf, value) {
    this.props.removeFromCurShelf(books, curShelf, value);
  }
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid" />
          </div>
        </div>
      </div>
    );
  }
}
