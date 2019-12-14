const initialState = {
  username: 'Alex',
  avatar: 'https://api.adorable.io/avatars/100/orange.png',
  token: 'kxu8712hp1ejteorxxt9xe',
  isAuthorized: true
};

export const userData = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...payload,
        isAuthorized: true
      };

    default:
      return state;
  }
};