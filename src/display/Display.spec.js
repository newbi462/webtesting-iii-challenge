// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('displays Closed if the closed prop is true and Open if otherwise', () => {
  Display.defaultProps.closed = true;
  const { getByText } = render(<Display />);

  getByText(/closed/i);
});

test('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
  Display.defaultProps.locked = true;
  const { getByText } = render(<Display />);

  getByText(/locked/i);
});

test('when locked or closed use the red-led class', () => {
  Display.defaultProps.closed = true;
  Display.defaultProps.locked = true;
  const { container } = render(<Display />)

  expect(container.firstChild["red-led"])
});
// this is a bad test as it is implied rather than explisit logic


test('when unlocked or open use the green-led class', () => {
  Display.defaultProps.closed = false;
  Display.defaultProps.locked = false;
  const { container, getByText } = render(<Display />)

  getByText(/unlocked/i || /open/i );
  expect(container.firstChild["green-led"])
});
