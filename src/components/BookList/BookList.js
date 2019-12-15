import React from 'react';
import { connect } from 'react-redux';
import { StoreService } from '../../services';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { BookListItem } from '../BookListItem';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../ErrorIndicator';

import './bookList.scss';

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
    const { booksLoaded, booksRequested, booksError, token } = this.props;

    booksRequested();
    StoreService.get('/books', token)
      .then((data) => booksLoaded(data))
      .catch((err) => {
        booksError(err)
      })
  }

  search(items, searchText) {
    if (searchText === 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

  filterByPrice(items, price) {
    switch (price) {
      case 'all':
        return items;
      case '0-15':
        return items.filter((item) => item.price >= 0 && item.price < 15);
      case '15-30':
        return items.filter((item) => item.price >= 15 && item.price <= 30);
      case '>30':
        return items.filter((item) => item.price > 30);
      default:
        return items;
    }
  }

  render() {
    const {
      books, loading, searchText,
      filterPrice, onView, isAuthorized,
      error
    } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      if (error.status === 401) {
        return <ErrorIndicator status={error.status}/>
      }
      return <ErrorIndicator />
    }

    if (!isAuthorized) {
      return <div>Not Found</div>
    }

    if (books) {
      const visibleBooks = this.filterByPrice(
        this.search(books, searchText),
        filterPrice
      );

      return <BookList
        onView={onView}
        books={visibleBooks} />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    searchText: state.bookList.searchText,
    filterPrice: state.bookList.filterPrice,
    token: state.userData.user.token,
    isAuthorized: state.userData.isAuthorized,
    loading: state.bookList.loading,
    error: state.bookList.error
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer);
