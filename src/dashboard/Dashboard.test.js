import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

test('defaults to unlocked and open', () => {
  const { getByText } = render(<Dashboard />);

  getByText(/unlocked/i);
  getByText(/open/i);
});
