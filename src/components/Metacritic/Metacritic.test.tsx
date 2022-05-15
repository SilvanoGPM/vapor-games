import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';
import { Metacritic } from '.';

describe('<Metacritic />', () => {
  test('should render a good metascore', () => {
    renderComponentWithTheme(<Metacritic size={4} value={100} />);

    expect(screen.getByText('100')).toBeInTheDocument();
  });

  test('should render a medium metascore', () => {
    renderComponentWithTheme(<Metacritic size={4} value={50} />);

    expect(screen.getByText('50')).toBeInTheDocument();
  });

  test('should render a bad metascore', () => {
    renderComponentWithTheme(<Metacritic size={4} value={0} />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
