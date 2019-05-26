import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksRead: [
        {
          bookTitle: "Reality",
          bookAuthor: "Jal Panchal",
          url:
            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        },
        {
          bookTitle: "End Game",
          bookAuthor: "Steve",
          url:
            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        }
      ],
      booksCurRead: [
        {
          bookTitle: "Halo",
          bookAuthor: "Jackson",
          url:
            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        }
      ],
      booksWanToRead: [
        {
          bookTitle: "Meet",
          bookAuthor: "Kacy",
          url:
            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        }
      ]
    };
    this.removeFromCurShelf = this.removeFromCurShelf.bind(this);
    this.shelfChange = this.shelfChange.bind(this);
  }

  //   currArray = this.state[currArray].filter(abook => {
  //     console.log(abook.bookAuthor);
  //     console.log(book.bookAuthor);

  //     return abook.bookTitle === book.bookAuthor;
  //   });

  removeFromCurShelf(book, currArray, value) {
    const newArr = this.state[currArray];
    const final = newArr.filter(abook => {
      return abook.bookAuthor !== book.bookAuthor;
    });
    this.setState({
      [currArray]: final
    });
  }

  shelfChange(book, value) {
    this.setState(() => {});
  }

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <BookShelf
            booksRead={this.state.booksRead}
            booksCurRead={this.state.booksCurRead}
            booksWanToRead={this.state.booksWanToRead}
            removeFromCurShelf={this.removeFromCurShelf}
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
