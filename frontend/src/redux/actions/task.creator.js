/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { LITTLE_API } from '@env';
import { getUser, updateUser } from './user.creator';
import updatePoints from '../../utils/updatePoints';

export function createTask(taskData) {
  const { userId, body, token } = taskData;

  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        LITTLE_API.concat(`/task/${userId}`),
        { body },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch({ type: 'CREATE_TASK', data });
      dispatch(getUser({ userId, token }));
    } catch (error) {
      dispatch({ type: 'TASK_ERROR' });
    }
  };
}
export function deleteTask(taskData) {
  const { userId, taskId, token } = taskData;

  return async (dispatch) => {
    try {
      await axios.put(
        LITTLE_API.concat(`/task/delete/${taskId}`),
        { body: '' },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch({ type: 'DELETE_TASK' });
      dispatch(getUser({ userId, token }));
    } catch (error) {
      dispatch({ type: 'TASK_ERROR' });
    }
  };
}
export function doneTask({
  taskId, token, userId, completeUser, taskClass,
}) {
  const points = updatePoints(taskClass, completeUser);
  return async (dispatch) => {
    try {
      await axios.put(
        LITTLE_API.concat(`/task/done/${taskId}`),
        { body: '' },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch({ type: 'DONE_TASK' });
      dispatch(updateUser({
        userId,
        token,
        taskId,
        points,
      }));
    } catch (error) {
      dispatch({ type: 'TASK_ERROR' });
    }
  };
}
