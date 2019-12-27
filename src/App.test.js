import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders The Todo Heading', () => {
  const { getByText } = render(<App />);
  const mainHeading = getByText(/Todo List/i);
  expect(mainHeading).toBeInTheDocument();
});

test('renders The Todo List Component', () => {
  const { getByText } = render(<App />);
  const comleteHeading = getByText(/Incomplete/i);
  expect(comleteHeading).toBeInTheDocument();
});