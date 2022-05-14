import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';

import { MenuItem } from './MenuItem';

describe('<MenuItem />', () => {
  test('should render a link with home text', () => {
    renderComponentWithTheme(<MenuItem to="/">Home</MenuItem>);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test('should render a selected link with search text', () => {
    renderComponentWithTheme(
      <MenuItem to="/search" selected>
        Search
      </MenuItem>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    expect(screen.getByTestId(/selected/i)).toBeInTheDocument();
  });
});
