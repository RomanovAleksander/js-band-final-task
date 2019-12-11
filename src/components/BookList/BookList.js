import React from 'react';
import { connect } from 'react-redux';
import { BookListItem } from '../BookListItem';

import StoreService from '../../services/StoreService';
import { booksLoaded, booksRequested } from '../../actions';
import { Spinner } from '../Spinner';
import './bookList.css';

const BookList = ({ books, onView }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onView={() => onView(book.id)} />
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
    // StoreService.req();
    StoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      });
  }

  render() {
    const {books, loading, visibleBooks, onView} = this.props;
    if (loading) {
      return <Spinner/>
    }
    if (visibleBooks) {
      return <BookList
        onView={onView}
        books={visibleBooks} />;
    } else {
      return <BookList
        onView={onView}
        books={books} />;
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
