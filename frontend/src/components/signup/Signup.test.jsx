import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../utils/test.utils';
import Signup from './Signup';
import '@testing-library/jest-dom/extend-expect';

jest.mock('validate.js');
const navigation = {
  navigate: jest.fn(),
};
jest.mock('../../redux/actions/loggedUser.creator');

describe('Given a Signup Component', () => {
  let screen;
  beforeEach(() => {
    screen = render(<Signup navigation={navigation} />);
  });
  describe('When it is rendered', () => {
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });

    describe('And Name is written', () => {
      test('Should call setUserName', () => {
        const nameInput = screen.getByPlaceholderText('Name');
        fireEvent.changeText(nameInput, 'testName');
        expect(screen.queryByDisplayValue('testName')).not.toBe(null);
      });
    });
    describe('And username is written', () => {
      test('Should call setUserUserName', () => {
        const usernameInput = screen.getByPlaceholderText('Username');
        fireEvent.changeText(usernameInput, 'testUserName');
        expect(screen.queryByDisplayValue('testUserName')).not.toBe(null);
      });
    });
    describe('And email is written', () => {
      test('Should call setUserEmail', () => {
        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.changeText(emailInput, 'testUserEmail');
        expect(screen.queryByDisplayValue('testUserEmail')).not.toBe(null);
      });
    });
    describe('And password is written', () => {
      test('Should call setUserPassword', () => {
        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.changeText(passwordInput, 'testUserPassword');
        expect(screen.queryByDisplayValue('testUserPassword')).not.toBe(null);
      });
    });
  });
});
