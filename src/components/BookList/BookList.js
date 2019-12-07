import React from 'react';
import { BookListItem } from '../BookListItem';
import { connect } from 'react-redux';

import StoreService from '../../services/StoreService';
import { booksLoaded } from "../../actions";
import './bookList.css';

class BookList extends React.Component {
  componentDidMount() {
    const data = StoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = {
  booksLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
