const initialState = {
  books: [],
  searchText: '',
  filterPrice: 'all',
  loading: true
};

export const bookList = (state = initialState, action) => {
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
    case 'SEARCH_BOOKS':
      return {
        ...state,
        searchText: payload.searchText
      };
    case 'FILTER_BOOKS':
      return {
        ...state,
        filterPrice: payload.filterPrice
      };

    default:
      return state;
  }
};
