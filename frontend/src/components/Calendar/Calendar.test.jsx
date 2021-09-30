import React from 'react';
import { render } from '../../utils/test.utils';
import Calendar from './Calendar';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Calendar Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Calendar navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });

  describe('When is rendered', () => {
    test('Should contain Calendar', () => {
    });
  });
});
