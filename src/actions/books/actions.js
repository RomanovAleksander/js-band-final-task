import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  SEARCH_BOOKS,
  FILTER_BOOKS
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

export {
  booksRequested,
  booksLoaded,
  booksError,
  searchBooks,
  filterBooks
};
