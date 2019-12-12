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

// const BookDetails = ({ book, onAddedToCart, count }) => {
//   const { title, author, level, tags, cover, description, price } = book;
//   return (
//     <main className="container book-page">
//       <div className="book-details-wrapper">
//         <div className="main-details">
//           <img src={cover} alt="cover" className="cart-img"/>
//           <div className="book-details">
//             <div className="book-title"><b>Title: </b>{title}</div>
//             <div className="book-author"><b>Author: </b>{author}</div>
//             <div className="book-level"><b>Level: </b>{level}</div>
//             <div className="book-tags"><b>Tags: </b>{tags}</div>
//           </div>
//         </div>
//         <div className="description"><b>Description: </b>{description}</div>
//       </div>
//       <div className="price-wrapper">
//           <div className="price-counter">
//             <div className="price-item"><b>Price, $</b><b>{price}</b></div>
//             <div className="counter-wrapper">
//               <b>Count</b>
//               <input type="number"
//                      className="counter form-control"
//                      value='1' />
//             </div>
//             <div className="price-item"><b>Total price</b><b>{price}</b></div>
//           </div>
//           <button className="btn btn-primary add-to-cart"
//                   onClick={onAddedToCart}>Add to cart</button>
//       </div>
//     </main>
//   )
// };

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
    StoreService.get(`/books/${bookId}`, 'hxqw5gnlxowd20zzb11h')
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
    const {book, bookAddedToCart} = this.props;

    bookAddedToCart(book.id, this.state.booksCount);
  };

  render() {
    const {book, loading, maxCount, count, minCount} = this.props;

    if (loading) {
      return <Spinner />
    }
    // return (book && <BookDetails
    //   book={book}
    //   onAddedToCart={() => bookAddedToCart(book.id)}
    // />);
    if (book) {
      const { amountBooksIn, title, author, level, tags, cover, description, price } = book;

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
              <div className="counter-wrapper">
                <b>Count</b>
                <input type="number"
                       className="counter form-control"
                       onChange={this.onCountChange}
                       max={maxCount}
                       min={minCount}
                       defaultValue={count} />
              </div>
              <div className="price-item"><b>Total price</b><b>{price}</b></div>
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
    count: state.bookDetails.count,
    maxCount: state.bookDetails.maxCount,
    minCount: state.bookDetails.minCount,
    amountBooksIn: state.bookDetails.amountBooksIn,
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
