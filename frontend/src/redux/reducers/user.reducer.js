function userReducer(loggedUser = {}, action) {
  const actionTypes = {
    GET_USER: () => action.data,
    default: () => loggedUser,
  };
  return (actionTypes[action?.type] || actionTypes.default)();
}

export default userReducer;
