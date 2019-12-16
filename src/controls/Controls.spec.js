// Test away

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

/*
test('provide buttons to toggle the closed and locked states.', () => {
  const { getByText } = render(<Controls />);

  getByText(/close/i);
  const closeButton = getByText(/close gate/i);
  fireEvent.click(closeButton);
  getByText(/open/i);


  //getByText(/open/i);
});
MAKES MORE SENCE TO DO FROM DISPAY*/


test('the closed toggle button is disabled if the gate is locked', () => {
  let locked = true;
  const { getByText } = render(<Controls />);
  expect(getByText(/open gate/i).closest('button')).toHaveAttribute('disabled');
});
//can do this from Diaplsy where I can set the state value or simulate click... 
