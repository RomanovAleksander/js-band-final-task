import React from 'react';
import { connect } from "react-redux";
import StoreService from "../../services/StoreService";
import { Spinner } from "../Spinner";
import {
  bookLoaded,
  bookRequested,
  bookAddedToCart
} from "../../actions";

import './bookDetails.css';

class BookDetailsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      booksCount: 1
    }
  }

  componentDidMount() {
    const {
      bookLoaded,
      bookRequested,
      bookId
    } = this.props;

    bookRequested();
    StoreService.get(`/books/${bookId}`, '5686wvoxndcplla5xi8qte')
      .then((data) => {
        bookLoaded(data);
      });
  }

  onCountChange = ({ target }) => {
    this.setState({
      booksCount: parseFloat(target.value)
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { book, bookAddedToCart } = this.props;
    const { booksCount } = this.state;

    bookAddedToCart(book.id, booksCount);
    this.setState({
      booksCount: 0
    });
  };

  render() {
    const {book, loading, maxCount, minCount, cartItems} = this.props;
    const { booksCount } = this.state;

    const cartBookIndex = cartItems.findIndex((item) => item.id === book.id);
    const cartBook = cartItems[cartBookIndex];
    const cartBookCount = cartBook ? cartBook.count : 0;

    if (loading) {
      return <Spinner />
    }
    if (book) {
      const { title, author, level, tags, cover, description, price } = book;
      const maxValue = maxCount - cartBookCount;
      const isValid =  (booksCount <= maxValue || isNaN(booksCount)) ? 'is-valid' : 'is-invalid';
      const calcTotal = (price * booksCount).toFixed(2);
      const isTotalNumber = isNaN(booksCount) ? 0 : calcTotal;

      return (
        <main className="container book-page">
          <div className="book-details-wrapper">
            <div className="main-details">
              <img src={cover} alt="cover" className="cart-img"/>
              <div className="book-details">
                <div className="book-title"><b>Title: </b>{title}</div>
                <div className="book-author"><b>Author: </b>{author}</div>
                <div className="book-level"><b>Level: </b>{level}</div>
                <div className="book-tags"><b>Tags: </b>{tags}</div>
              </div>
            </div>
            <div className="description"><b>Description: </b>{description}</div>
          </div>
          <form className="price-wrapper" onSubmit={this.onSubmit}>
            <div className="price-counter">
              <div className="price-item"><b>Price, $</b><b>{price}</b></div>
              <label className="counter-wrapper" htmlFor="count-input">
                <b>Count</b>
                <div className="input-wrapper">
                  <input type="number"
                         className={`counter form-control ${isValid}`}
                         onChange={this.onCountChange}
                         max={maxValue}
                         min={minCount}
                         value={booksCount}
                         id="count-input"
                         required />
                  <div className="invalid-feedback">We don`&apos;`t have so much!</div>
                </div>
              </label>
              <div className="price-item"><b>Total price</b><b>{isTotalNumber}</b></div>
            </div>
            <button className="btn btn-primary add-to-cart"
                    type="submit">
              Add to cart
            </button>
          </form>
        </main>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.bookDetails.book,
    maxCount: state.bookDetails.maxCount,
    minCount: state.bookDetails.minCount,
    cartItems: state.bookDetails.cartItems,
    loading: state.bookDetails.loading
  }
};

const mapDispatchToProps = {
  bookLoaded,
  bookRequested,
  bookAddedToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetailsContainer);
