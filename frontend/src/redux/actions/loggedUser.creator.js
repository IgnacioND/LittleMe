/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { LITTLE_API } from '@env';

export function loginUser(userInfo) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(LITTLE_API.concat('/auth/login'), userInfo);
      dispatch({
        type: 'LOGIN_USER',
        data,
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        dispatch({
          type: 'LOGIN_ERROR',
        });
      } else {
        dispatch({
          type: 'SERVER_ERROR',
        });
      }
    }
  };
}

export function registerUser(userInfo) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(LITTLE_API.concat('/auth/signup'), userInfo);
      if (data) {
        dispatch({
          type: 'SIGNUP_USER',
          data,
        });
      }
      dispatch(loginUser(userInfo));
    } catch (error) {
      if (error?.response?.status === 500) {
        dispatch({
          type: 'SIGNUP_ERROR',
        });
      } else {
        dispatch({
          type: 'SERVER_ERROR',
        });
      }
    }
  };
}
