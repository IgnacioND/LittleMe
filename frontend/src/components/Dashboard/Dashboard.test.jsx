import React from 'react';

import { render } from '../../utils/test.utils';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom/extend-expect';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Dashboard Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Dashboard navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('When Character is clicked', () => {
    test('Should go to character', () => {

    });
  });
});
