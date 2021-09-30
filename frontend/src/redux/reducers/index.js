import { combineReducers } from 'redux';
import loggedUser from './loggedUser.reducer';
import user from './user.reducer';
import tasks from './task.reducer';

export default combineReducers({
  loggedUser,
  tasks,
  user,
});
