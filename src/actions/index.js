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

const searchBook = (books, searchText) => ({
  type: 'SEARCH_BOOK',
  payload: {
    searchText,
    books
  }
});

const filterBook = (books, filterPrice) => ({
  type: 'FILTER_BOOKS',
  payload: {
    filterPrice,
    books
  }
});

const bookShowDetails = (bookId) => {
  return {
    type: 'BOOK_SHOW_DETAILS',
    payload: bookId
  }
};

export {
  booksLoaded,
  booksRequested,
  searchBook,
  filterBook,
  bookShowDetails
}
