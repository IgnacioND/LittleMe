import React from 'react';
import { render } from '../../utils/test.utils';
import Footer from './Footer';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Footer Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Footer navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('When Add task is clicked', () => {
    test('Should show keyboard', () => {

    });
  });
  describe('When close is clicked', () => {
    test('Should hide keyboard', () => {
    });
    test('Should not add task', () => {

    });
  });
  describe('When ok task is clicked', () => {
    describe('And there is nothing written', () => {
      test('Should not add task', () => {

      });
    });
    describe('And there is something written', () => {
      test('Should add task', () => {

      });
      test('Should hide keyboard', () => {

      });
    });
  });
});
describe('When task list is clicked', () => {
  test('Should go to tasklist', () => {

  });
});
