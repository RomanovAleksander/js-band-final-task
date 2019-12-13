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
    const { booksLoaded, booksRequested } = this.props;

    StoreService.post('/signin', { "username": "testUser" })
      .then((data) => {
        console.log(data);
      });

    booksRequested();
    StoreService.get('/books', '5686wvoxndcplla5xi8qte')
      .then((data) => booksLoaded(data));
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
    const {books, loading, searchText, filterPrice, onView} = this.props;
    const visibleBooks = this.filterByPrice(
      this.search(books, searchText),
      filterPrice
    );

    if (loading) {
      return <Spinner/>
    }

    return <BookList
        onView={onView}
        books={visibleBooks}/>;

  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    searchText: state.bookList.searchText,
    filterPrice: state.bookList.filterPrice,
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
