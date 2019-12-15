import { combineReducers } from 'redux';
import { bookAndCart } from './bookAndCart';
import { bookList } from './bookList';
import { userData } from './authorization'

export const reducer = combineReducers({
  bookList,
  bookAndCart,
  userData
});
