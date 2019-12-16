import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('displays Closed if the closed prop is true and Open if otherwise', () => {
  Display.defaultProps.closed = true;
  const { getByText } = render(<Display />);

  getByText(/closed/i);
});
