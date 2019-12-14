const initialState = {
  book: null,
  bookId: null,
  maxCount: 0,
  minCount: 0,
  cartItems: [],
  orderTotal: 0,
  booksInCart: 0,
  isCartEmpty: true,
  purchaseMassage: null,
  loading: true
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

export const bookDetails = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
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
        maxCount: payload.count,
        loading: false
      };
    case 'PURCHASE_SUCCESS':
      return {
        ...initialState,
        purchaseMassage: payload
      };
    case 'BOOK_ADDED_TO_CART':
      const { book, cartItems, orderTotal, booksInCart } = state;
      const itemIndex = cartItems.findIndex((item) => item.id === payload.bookId);
      const item = cartItems[itemIndex];
      const newItem = updateCartItem(book, item, payload.count);
      const newTotal = parseFloat((orderTotal + book.price * payload.count).toFixed(2));
      const newBooksInCart = booksInCart + payload.count;

      return {
        ...state,
        isCartEmpty: false,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
        orderTotal: newTotal,
        booksInCart: newBooksInCart
      };

    default:
      return state;
  }
};
