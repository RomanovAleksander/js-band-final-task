import {
  SIGN_IN,
  SIGN_OUT
} from '../actions/types';

const initialState = {
  user: {
    username: null,
    avatar: null,
    token: null
  },
  isAuthorized: false
};

export const userData = (state , action) => {
  if (state === undefined) {
    if (localStorage.userData) {
      return {
        user: JSON.parse(localStorage.getItem('userData')),
        isAuthorized: true
      }
    } else {
      return initialState
    }
  }

  const {type, payload} = action;
  switch (type) {
    case SIGN_IN:
      return {
        user: {
          ...payload
        },
        isAuthorized: true
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
