import {
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE
} from '../actions/book/types';
import {
  BOOK_ADDED_TO_CART,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE
} from '../actions/cart/types';

const initialState = {
  bookDetails: {
    book: null,
    bookId: null,
    maxCount: 0,
    minCount: 0,
    loading: true,
    error: null
  },
  cart: {
    cartItems: [],
    orderTotal: 0,
    booksInCart: 0,
    isCartEmpty: true,
    loading: false,
    error: null
  }
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
};

const updateCartItem = (book, item, count) => {
  if (item) {
    const total = item.totalPrice + book.price * count;
    return {
      ...item,
      count: item.count + count,
      totalPrice: parseFloat((total).toFixed(2))
    }
  } else {
    return {
      ...item,
      id: book.id,
      count: count,
      totalPrice: parseFloat((book.price * count).toFixed(2)),
      title: book.title
    };
  }
};

export const bookAndCart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOK_REQUEST:
      return {
        ...state,
        bookDetails: {
          ...state.bookDetails,
          book: {},
          loading: true,
          error: null
        }
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        bookDetails: {
          ...state.bookDetails,
          book: payload,
          maxCount: payload.count,
          loading: false,
          error: null
        }
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        bookDetails: {
          ...state.bookDetails,
          book: {},
          loading: false,
          error: payload
        }
      };
    case PURCHASE_REQUEST:
      return {
        ...initialState,
        cart: {
          ...initialState.cart,
          loading: true,
          error: null
        }
      };
    case PURCHASE_SUCCESS:
      return {
        ...initialState,
        cart: {
          ...initialState.cart,
          loading: false,
          error: null
        }
      };
    case PURCHASE_FAILURE:
      return {
        ...initialState,
        cart: {
          ...initialState.cart,
          loading: false,
          error: payload
        }
      };
    case BOOK_ADDED_TO_CART:
      const { book } = state.bookDetails;
      const { cartItems, orderTotal, booksInCart } = state.cart;
      const itemIndex = cartItems.findIndex((item) => item.id === payload.bookId);
      const item = cartItems[itemIndex];
      const newItem = updateCartItem(book, item, payload.count);
      const newTotal = parseFloat((orderTotal + book.price * payload.count).toFixed(2));
      const newBooksInCart = booksInCart + payload.count;

      return {
        ...state,
        cart: {
          ...state.cart,
          isCartEmpty: false,
          cartItems: updateCartItems(cartItems, newItem, itemIndex),
          orderTotal: newTotal,
          booksInCart: newBooksInCart
        }
      };

    default:
      return state;
  }
};
