import React, { Component } from "react";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(event) {
    console.log(event.target.value);

    if (event.target.value === "read") {
      // Remove from existing array
      // Push to the read Array
      console.log("pushing read");
    }
  }
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${this.props.books.url})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.handleOnclick}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title"> {this.props.books.bookTitle}</div>
        <div className="book-authors">{this.props.books.bookAuthor}</div>
      </div>
    );
  }
}
