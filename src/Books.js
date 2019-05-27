import React, { Component } from "react";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(event) {
    // Remove from existing array
    this.props.pushIt(
      this.props.books,
      this.props.curShelf,

      event.target.value
    );
    // Push to the read Array
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
              backgroundImage: `url(${this.props.url})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.handleOnclick}>
              <option value="move" disabled>
                Move to...
              </option>

              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title"> {this.props.title}</div>
        <div className="book-authors">{} </div>
      </div>
    );
  }
}
