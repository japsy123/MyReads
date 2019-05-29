import React, { Component } from "react";

export default class ChangeShelf extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(e) {
    // If current shelf of the book is NOT equal to the value (the shelf selected) then do below
    if (this.props.curShelf !== e.target.value) {
      this.props.changeShelf(this.props.book, e.target.value);
    }
  }
  render() {
    const { book, books } = this.props;

    // Here, setting current shelf to none
    let currShelf = "none";

    // If the book is already there in any of the shelf then set its current shelf to book.shelf
    for (let i of books) {
      if (i.id === book.id) {
        currShelf = i.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleOnclick} defaultValue={currShelf}>
          <option value="move" disabled>
            Move to...
          </option>

          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
