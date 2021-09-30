/* eslint-disable no-underscore-dangle */
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import * as redux from 'react-redux';

import { validate } from 'validate.js';
import Login from './Login';
import { render } from '../../utils/test.utils';
import { loginUser } from '../../redux/actions/loggedUser.creator';
import '@testing-library/jest-dom/extend-expect';
import constraints from '../../utils/constraints';
import userMock from '../../mocks/userMock';

jest.mock('../../redux/actions/loggedUser.creator');
jest.mock('validate.js');

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Login Component', () => {
  describe('When it is rendered', () => {
    let screen;

    beforeEach(() => {
      const initialState = {
        user: userMock,
      };
      screen = render(<Login navigation={navigation} />, initialState);
    });

    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });

    describe('And email recive an input', () => {
      test('Should set email', () => {
        const emailInput = screen.getByPlaceholderText('Username');

        fireEvent.changeText(emailInput, 'email12345678');
        expect(screen.queryByDisplayValue('email12345678')).not.toBe(null);
      });
    });
    describe('And password recive an input', () => {
      test('Should set password', () => {
        const passwordInput = screen.getByPlaceholderText('Login');
        const setPassword = jest.fn();
        fireEvent(passwordInput, 'onChangeText', setPassword);
        expect(setPassword).toHaveBeenCalled();
      });
    });
    describe('And user doesnt exist', () => {
      test('Should return not user warning', () => {
        jest
          .spyOn(redux, 'useSelector')
          .mockReturnValueOnce('erroneus');

        validate.mockReturnValue({ emailAddress: 'email12345678' }, constraints);
        loginUser.mockReturnValue({ type: '' });

        const loginButton = screen.getByTestId('loginButton');
        fireEvent.press(loginButton);
        const warningMessage = screen.getByTestId('warningText');
        expect(warningMessage).not.toBe(null);
      });
    });

    describe('When back button is pressed', () => {
      test('Should go to HomeScreen', () => {
        const backButton = screen.getByTestId('backButton');
        fireEvent.press(backButton);
        expect(navigation.navigate).toHaveBeenCalled();
      });
    });
  });
});
