function taskReducer(task = {}, action) {
  const actionTypes = {
    CREATE_TASK: () => action.data,
    EDIT_TASK: () => action.data,
    DELETE_TASK: () => 'deletedTask',
    DONE_TASK: () => 'doneTask',
    default: () => task,
  };
  return (actionTypes[action?.type] || actionTypes.default)();
}

export default taskReducer;
