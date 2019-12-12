const initialState = {
  book: null,
  bookId: null,
  count: 1,
  maxCount: 0,
  minCount: 0,
  cartItems: [],
  orderTotal: 0,
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
    return {
      ...item,
      count: item.count + count,
      totalPrice: item.totalPrice + book.price * count
    }
  } else {
    return {
      id: book.id,
      count: count,
      totalPrice: book.price * count,
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
    case 'BOOK_ADDED_TO_CART':
      const { book } = state;
      const itemIndex = state.cartItems.findIndex((item) => item.id === payload.bookId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(book, item, payload.count);

      // const calcOrderPrice = state.cartItems.map((item) => {
      //   let order = 0;
      //   order += item.totalPrice;
      //   return order;
      // });

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
        maxCount: state.maxCount - payload.count
        // orderTotal: calcOrderPrice
      };

    default:
      return state;
  }
};
