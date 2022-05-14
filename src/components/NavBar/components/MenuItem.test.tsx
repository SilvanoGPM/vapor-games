import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';

import { MenuItem } from './MenuItem';

describe('<MenuItem />', () => {
  test('should render a link', () => {
    renderComponentWithTheme(<MenuItem to="/">Home</MenuItem>);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
