import React from 'react';
import { render } from '../../utils/test.utils';
import Header from './Header';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Header Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Header navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('When home is clicked', () => {
    test('Should go to dashboard', () => {

    });
  });
  describe('When calendar is clicked', () => {
    test('Should go to calendar', () => {

    });
  });
  describe('When profile is clicked', () => {
    test('Should go to profile', () => {

    });
  });
});
