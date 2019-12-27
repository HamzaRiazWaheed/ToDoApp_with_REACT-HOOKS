import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './todoList';

test('renders The Todo List Component', () => {
  const { getByText } = render(<TodoList />);
  const sectionHeading = getByText(/Incomplete/i);
  expect(sectionHeading).toBeInTheDocument();
});
