import React, { Component } from "react";
import Books from "./Books";

const BookShelf = props => {
  const { books } = props;
  // Using an array of shelf so we can iterated over it along with its respective book
  const shelfTypes = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" }
  ];
  return (
    <div>
      {shelfTypes.map((shelf, i) => {
        const currentBooks = books.filter(book => book.shelf === shelf.type);
        // console.log(currentBooks);
        return (
          <div className="bookshelf" key={i}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentBooks.map(book => {
                  return (
                    <Books
                      book={book}
                      books={books}
                      curShelf={shelf.type}
                      key={book.id}
                      changeShelf={props.changeShelf}
                    />
                  );
                })}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookShelf;
