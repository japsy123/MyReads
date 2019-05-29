import React, { Component } from "react";
import ChangeShelf from "./ChangeShelf";
import nopic from "./image/nopic.png";

const Books = props => {
  const { book, books, changeShelf } = props;

  const bgImage =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : nopic;
  const title = book.title ? book.title : "No title for this book";
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
            book={book}
            books={books}
            changeShelf={changeShelf}
          />
        </div>

        <div className="book-title"> {title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map((author, i) => (
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
