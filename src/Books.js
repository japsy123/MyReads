import React, { Component } from "react";
import ChangeShelf from "./ChangeShelf";
import nopic from "./image/nopic.png";

const Books = props => {
  const { books, changeShelf } = props;

  const bgImage =
    books.imageLinks && books.imageLinks.thumbnail
      ? books.imageLinks.thumbnail
      : nopic;
  const title = books.title ? books.title : "No title for this book";
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${bgImage})`
            }}
          />
          <ChangeShelf
            curShelf={props.curShelf}
            book={books}
            changeShelf={changeShelf}
          />
        </div>

        <div className="book-title"> {books.title}</div>
        <div className="book-authors">
          {books.authors &&
            books.authors.map((author, i) => (
              <div className="book-authors" key={i}>
                {author}
              </div>
            ))}
        </div>
      </div>
    </li>
  );
};
export default Books;
