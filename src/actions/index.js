const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
};

const bookRequested = () => {
  return {
    type: 'FETCH_BOOK_REQUEST'
  }
};

const bookLoaded = (newBook) => {
  return {
    type: 'FETCH_BOOK_SUCCESS',
    payload: newBook
  }
};

const searchBooks = (searchText) => ({
  type: 'SEARCH_BOOKS',
  payload: {
    searchText
  }
});

const filterBooks = (filterPrice) => ({
  type: 'FILTER_BOOKS',
  payload: {
    filterPrice
  }
});

const bookAddedToCart = (bookId, count) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: {
      bookId,
      count
    }
  }
};

const tokenLoaded = (token) => ({
  type: 'LOAD_TOKEN',
  payload: {
    token
  }
});

export {
  booksLoaded,
  booksRequested,
  searchBooks,
  bookLoaded,
  bookRequested,
  filterBooks,
  bookAddedToCart
}
