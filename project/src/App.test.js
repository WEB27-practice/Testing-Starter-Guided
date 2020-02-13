import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// the verbose way to write a test
test('renders animal from header', () => {
  // Arrange
  const { getByText } = render(<App/>);

  // Act
  const header = getByText(/add new animal/i);

  // Assert
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});

// order the tests the way you write the code

// Jest global functions:
// -test() --> it accepts a string and a callback function
// -expect()
test('concise test - renders animal from header', () => { 
  // you will ALWAYS call teh render function
  // returns and object and destructure the object and take out the { getByText }
  const { getByText } = render(<App/>);

  getByText(/add new animal/i);
})
// the concise way to test if something is in the application or if something is truthy

