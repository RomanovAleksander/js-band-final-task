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
    const { booksLoaded, booksRequested, token } = this.props;

    booksRequested();
    StoreService.get('/books', token)
      .then((data) => booksLoaded(data))
      .catch(() => {

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
    const {books, loading, searchText, filterPrice, onView, isAuthorized} = this.props;

    if (loading) {
      return <Spinner/>
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
        books={visibleBooks}/>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    searchText: state.bookList.searchText,
    filterPrice: state.bookList.filterPrice,
    token: state.userData.token,
    isAuthorized: state.userData.isAuthorized,
    loading: state.bookList.loading
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
