import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  SEARCH_BOOKS,
  FILTER_BOOKS,
  BOOK_ADDED_TO_CART,
  PURCHASE_SUCCESS,
  SIGN_IN,
  SIGN_OUT
} from './types';

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks
  }
};

const bookRequested = () => {
  return {
    type: FETCH_BOOK_REQUEST
  }
};

const bookLoaded = (newBook) => {
  return {
    type: FETCH_BOOK_SUCCESS,
    payload: newBook
  }
};

const searchBooks = (searchText) => ({
  type: SEARCH_BOOKS,
  payload: {
    searchText
  }
});

const filterBooks = (filterPrice) => ({
  type: FILTER_BOOKS,
  payload: {
    filterPrice
  }
});

const bookAddedToCart = (bookId, count) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: {
      bookId,
      count
    }
  }
};

const purchaseBooks = (message) => {
  return {
    type: PURCHASE_SUCCESS,
    payload: message
  }
};

const userSignIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user
  }
};

const userSignOut = () => {
  return {
    type: SIGN_OUT
  }
};


export {
  booksLoaded,
  booksRequested,
  searchBooks,
  bookLoaded,
  bookRequested,
  filterBooks,
  bookAddedToCart,
  purchaseBooks,
  userSignIn,
  userSignOut
}
