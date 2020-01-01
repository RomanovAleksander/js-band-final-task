import {
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE
} from './types';

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

export {
  bookRequested,
  bookLoaded,
  bookError
};
