import React from 'react';
import { connect } from 'react-redux';
import { BookListItem } from '../BookListItem';

import StoreService from '../../services/StoreService';
import { booksLoaded, booksRequested } from '../../actions';
import { Spinner } from '../Spinner';
import './bookList.css';

const BookList = ({ books }) => {
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
};

class BookListContainer extends React.Component {
  componentDidMount() {
    const {booksLoaded, booksRequested} = this.props;
    booksRequested();
    StoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      });
  }

  render() {
    const {books, loading, visibleBooks} = this.props;
    if (loading) {
      return <Spinner/>
    }
    if (visibleBooks) {
      return < BookList books={visibleBooks} />;
    } else {
      return < BookList books={books} />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    visibleBooks: state.visibleBooks,
    loading: state.loading
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer);
