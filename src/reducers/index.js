const initialState = {
  books: [],
  loading: true,
  searchText: '',
  visibleBooks: null,
  filterPrice: 'Price',
  cartItems: [
    {
      id: 1,
      title: 'Book 1',
      count: 1,
      total: 100
    },
    {
      id: 2,
      title: 'Book 2',
      count: 2,
      total: 200
    }
  ],
  orderTotal: 300,
  bookId: null,
  book: []
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
    case 'FETCH_BOOK_REQUEST':
      return {
        ...state,
        book: [],
        loading: true
      };
    case 'FETCH_BOOK_SUCCESS':
      return {
        ...state,
        book: payload,
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
