import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  SEARCH_BOOKS,
  FILTER_BOOKS,
  SIGN_OUT
} from '../actions/types'

const initialState = {
  books: [],
  searchText: '',
  filterPrice: 'all',
  loading: true
};

export const bookList = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        loading: true
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        loading: false
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        searchText: payload.searchText
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filterPrice: payload.filterPrice
      };
    case SIGN_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
