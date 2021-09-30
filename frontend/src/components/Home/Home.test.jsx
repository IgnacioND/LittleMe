import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../utils/test.utils';
import Home from './Home';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Home Component', () => {
  let screen;
  beforeEach(() => {
    screen = render(<Home navigation={navigation} />);
  });
  describe('When it is rendered', () => {
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('When login is pushed', () => {
    test('Should go to Login', () => {
      const loginButton = screen.getByTestId('loginButton');
      fireEvent.press(loginButton);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When Signup is pushed', () => {
    test('Should go to signup', () => {
      const signupButton = screen.getByTestId('signupButton');
      fireEvent.press(signupButton);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
