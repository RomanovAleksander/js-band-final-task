import {
  BOOK_ADDED_TO_CART,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE
} from './types';

const bookAddedToCart = (bookId, count) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: {
      bookId,
      count
    }
  }
};

const purchaseRequest = () => {
  return {
    type: PURCHASE_REQUEST
  }
};

const purchaseSuccess = () => {
  return {
    type: PURCHASE_SUCCESS
  }
};

const purchaseError = (error) => {
  return {
    type: PURCHASE_FAILURE,
    payload: error
  }
};

export {
  bookAddedToCart,
  purchaseRequest,
  purchaseSuccess,
  purchaseError
};
