import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders animal from header', () => {
  // Arrange
  const { getByText } = render(<App/>);

  // Act
  const header = getByText(/add new animal/i);

  // Assert
  expect(header).toBeInTheDocument();
});
