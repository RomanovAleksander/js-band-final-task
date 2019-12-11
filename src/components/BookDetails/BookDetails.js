import React from 'react';
import { connect } from "react-redux";
import StoreService from "../../services/StoreService";
import { Spinner } from "../Spinner";
import { bookLoaded, bookRequested } from "../../actions";

import './bookDetails.css';

const BookDetails = ({ book }) => {
  const { title, author, level, tags, cover, description, price } = book;
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
      <div className="price-wrapper">
          <div className="price-counter">
            <div className="price-item"><b>Price, $</b><b>{price}</b></div>
            <div className="counter-wrapper">
              <b>Count</b>
              <input type="number" className="counter form-control"/>
            </div>
            <div className="price-item"><b>Total price</b><b>{price}</b></div>
          </div>
          <button className="btn btn-primary add-to-cart">Add to cart</button>
      </div>
    </main>
  )
};

class BookDetailsContainer extends React.Component {
  componentDidMount() {
    const {bookLoaded, bookRequested, bookId} = this.props;
    bookRequested();
    StoreService.getBook(bookId)
      .then((data) => {
        bookLoaded(data);
      });
  }

  render() {
    const {book, loading} = this.props;
    if (loading) {
      return <Spinner />
    }
    return <BookDetails book={book}/>;
  }
}


const mapStateToProps = (state) => {
  return {
    book: state.book,
    loading: state.loading
  }
};

const mapDispatchToProps = {
  bookLoaded,
  bookRequested
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetailsContainer);
