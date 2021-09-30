import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../utils/test.utils';
import NewTask from './NewTask';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a NewTask Component', () => {
  let screen;
  beforeEach(() => {
    screen = render(<NewTask navigation={navigation} />);
  });
  describe('When it is rendered', () => {
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('When addTaskHandler is pressed', () => {
    beforeEach(() => {
      const addTaskButton = screen.getByTestId('addTaskHandler');
      fireEvent.press(addTaskButton);
    });
    describe('And there is no input', () => {
      test('Input should show', () => {
        const taskInput = screen.getByPlaceholderText('Add new task');
        expect(taskInput).not.toBe(null);
      });
    });
  });
});
