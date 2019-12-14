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

const purchaseBooks = () => {
  return {
    type: 'PURCHASE_SUCCESS'
  }
};

// const usernameRequested = () => {
//   return {
//     type: 'FETCH_USER_REQUEST'
//   }
// };

const usernameLoaded = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user
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
  usernameLoaded
}
