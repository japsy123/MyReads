import React, { Component } from "react";
import Books from "./Books";

export default class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <Books />
        </div>
      </div>
    );
  }
}
