import { combineReducers } from 'redux';
import { bookDetails } from './bookDetails';
import { bookList } from './bookList';
import { userData } from './authorization'

export const reducer = combineReducers({
  bookList,
  bookDetails,
  userData
});