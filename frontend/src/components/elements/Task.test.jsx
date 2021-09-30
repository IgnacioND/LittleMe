import React from 'react';
import { render } from '../../utils/test.utils';
import Task from './Task';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Task Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Task navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
