/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { LITTLE_API } from '@env';

export function getUser({ userId, token }) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(LITTLE_API.concat(`/user/${userId}`),
        { headers: { Authorization: `Bearer ${token}` } });
      if (data) {
        dispatch({ type: 'GET_USER', data });
      }
    } catch (error) {
      if (error?.response?.status === 500) {
        dispatch({ type: 'GET_USER_ERROR' });
      } else {
        dispatch({ type: 'SERVER_ERROR' });
      }
    }
  };
}
export function updateUser({ userId, token, points }) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(LITTLE_API.concat(`/user/${userId}`),
        { points },
        { headers: { Authorization: `Bearer ${token}` } });
      if (data) { dispatch({ type: 'GET_USER', data }); }
    } catch (error) {
      if (error?.response?.status === 500) {
        dispatch({ type: 'GET_USER_ERROR' });
      } else {
        dispatch({ type: 'SERVER_ERROR' });
      }
    }
  };
}
