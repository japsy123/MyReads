import React, { Component } from "react";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(event) {
    console.log("hi");
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
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option onClick={this.handleOnclick} value="currentlyReading">
                Currently Reading
              </option>
              <option onClick={this.handleOnclick} value="wantToRead">
                Want to Read
              </option>
              <option onClick={this.handleOnclick} value="read">
                Read
              </option>
              <option onClick={this.handleOnclick} value="none">
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title"> {this.props.books.bookTitle}</div>
        <div className="book-authors">{this.props.books.bookAuthor}</div>
      </div>
    );
  }
}
