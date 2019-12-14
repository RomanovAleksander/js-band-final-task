const initialState = {
  username: 'Alex',
  avatar: 'https://api.adorable.io/avatars/100/orange.png',
  token: 'iflhou39qa5qswkg4eakb',
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