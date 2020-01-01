import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT
} from '../actions/signin/types';
import { LocalStorageService } from '../services';

const initialState = {
  user: {
    username: null,
    avatar: null,
    token: null
  },
  isAuthorized: false,
  loading: false,
  error: null
};

export const userData = (state, action) => {
  if (state === undefined) {
    if (localStorage.userData) {
      return {
        user: LocalStorageService.getItem('userData'),
        isAuthorized: true
      }
    } else {
      return initialState
    }
  }

  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SIGN_IN_SUCCESS:
      return {
        user: {
          ...payload
        },
        isAuthorized: true,
        loading: false
      };
    case SIGN_IN_FAILURE:
      return {
        ...initialState,
        error: payload
      };
    case SIGN_OUT:
      localStorage.clear();
      return {
        ...initialState
      };

    default:
      return state;
  }
};
