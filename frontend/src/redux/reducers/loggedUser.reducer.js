/* eslint-disable no-underscore-dangle */

function loggedUserReducer(loggedUser = {}, action) {
  const succesfull = {
    isAuthenticated: true,
    userId: action?.data?.user?._id,
    token: action?.data?.token,
    refreshToken: action?.data?.refreshToken,
  };
  const error = {
    isAuthenticated: false,
    email: 'erroneus',
  };

  const actionTypes = {
    LOGIN_USER: () => succesfull,
    LOGIN_ERROR: () => error,
    SIGNUP_USER: () => succesfull,
    SIGNUP_ERROR: () => error,
    default: () => loggedUser,
  };
  return (actionTypes[action?.type] || actionTypes.default)();
}

export default loggedUserReducer;
