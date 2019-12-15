import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
  SEARCH_BOOKS,
  FILTER_BOOKS,
  BOOK_ADDED_TO_CART,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE,
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

const booksError = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  };
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

const bookError = (error) => {
  return {
    type: FETCH_BOOK_FAILURE,
    payload: error
  };
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

const purchaseRequest = () => {
  return {
    type: PURCHASE_REQUEST
  }
};

const purchaseSuccess = () => {
  return {
    type: PURCHASE_SUCCESS
  }
};

const purchaseError = (error) => {
  return {
    type: PURCHASE_FAILURE,
    payload: error
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
  booksError,
  searchBooks,
  bookLoaded,
  bookRequested,
  bookError,
  filterBooks,
  bookAddedToCart,
  purchaseRequest,
  purchaseSuccess,
  purchaseError,
  userSignIn,
  userSignOut
};
