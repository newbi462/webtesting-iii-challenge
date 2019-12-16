import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

test('defaults to unlocked and open', () => {
  const { getByText } = render(<Dashboard />);

  getByText(/unlocked/i);
  getByText(/open/i);
});

test('cannot be closed or opened if it is locked', () => {
  const { getByText } = render(<Dashboard />);

  //lock gate(close then lock)
  const closeButton = getByText(/close gate/i);
  fireEvent.click(closeButton);
  const lockButton = getByText(/lock gate/i);
  fireEvent.click(lockButton);

  //try to open locked gate
  const openButton = getByText(/open gate/i);
  fireEvent.click(openButton);

  //verify still closed
  getByText(/closed/i);
});
//As it DEFULETS TO UNLOCKED how would you test cant be closed while locked from a user stand point?
