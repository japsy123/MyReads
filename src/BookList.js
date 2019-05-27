import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <BookShelf
            read={this.props.read}
            currentlyReading={this.props.currentlyReading}
            wantToRead={this.props.wantToRead}
            removeFromCurShelf={this.props.removeFromCurShelf}
          />

          <div className="open-search">
            <Link to="/search">
              <button />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
