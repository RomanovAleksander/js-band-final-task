const initialState = {
  books: [],
  loading: true,
  searchText: '',
  visibleBooks: null,
  filterPrice: 'Price'
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: payload,
        loading: false
      };
    case 'SEARCH_BOOK':
      return {
        ...state,
        searchText: payload.searchText,
        visibleBooks: payload.books.filter(book => book.title.toLowerCase().includes(payload.searchText.toLowerCase()))
      };

    default:
      return state;
  }
};
