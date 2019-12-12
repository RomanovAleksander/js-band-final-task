import { combineReducers } from 'redux';
import { bookDetails } from './bookDetails';
import { bookList } from './bookList';

// const shoppingCart = (state = {
//   cartItems: [],
//   orderTotal: 0,
// }, action) => {
//   const {type, payload} = action;
//   switch (type) {
//     case 'BOOK_ADDED_TO_CART':
//       console.log(state.bookList);
//       const book = state.books.find((book) => book.id === payload.bookId);
//       const itemIndex = state.cartItems.findIndex((item) => item.id === payload.bookId);
//       const item = state.cartItems[itemIndex];
//       const newItem = updateCartItem(book, item);
//
//       // const calcOrderPrice = state.cartItems.map((item) => {
//       //   let order = 0;
//       //   order += item.totalPrice;
//       //   return order;
//       // });
//
//       return {
//         ...state,
//         cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
//         // orderTotal: calcOrderPrice
//       };
//
//     default:
//       return state;
//   }
// };



export const reducer = combineReducers({
  bookList,
  // shoppingCart,
  bookDetails
});