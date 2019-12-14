const initialState = {
  username: 'Alex',
  avatar: 'https://api.adorable.io/avatars/100/orange.png',
  token: null,
  isAuthorized: false
};

export const userData = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...payload,
        isAuthorized: true
      };
    case 'SIGN_OUT':
      return {
        ...initialState
      };

    default:
      return state;
  }
};