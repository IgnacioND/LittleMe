import React from 'react';
import { render } from '../../utils/test.utils';
import Profile from './Profile';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Profile Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Profile navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
