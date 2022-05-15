import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';

import { Hero } from '.';

describe('Hero namespace', () => {
  test('should render a container with background and children', () => {
    renderComponentWithTheme(<Hero.Background>Container Test</Hero.Background>);

    expect(screen.getByText(/container test/i)).toBeInTheDocument();
  });

  test('should render a heading with title', () => {
    renderComponentWithTheme(<Hero.Title>Grand Theft Auto V</Hero.Title>);

    expect(screen.getByText(/grand theft auto v/i)).toBeInTheDocument();
  });

  test('should render a text with publiser', () => {
    renderComponentWithTheme(<Hero.Publisher>Rockstar Games</Hero.Publisher>);

    expect(screen.getByText(/rockstar games/i)).toBeInTheDocument();
  });

  test('should render a genre list', () => {
    renderComponentWithTheme(
      <Hero.Genres
        genres={[
          { name: 'Action', slug: 'action' },
          { name: 'Adventure', slug: 'adventure' },
        ]}
      />,
    );

    expect(screen.getByText(/action/i)).toBeInTheDocument();
    expect(screen.getByText(/adventure/i)).toBeInTheDocument();
  });

  test('should render scores', () => {
    renderComponentWithTheme(<Hero.Scores metacritic={92} rating={4.48} />);

    expect(screen.getByText(/92/i)).toBeInTheDocument();
  });

  test('should render a link with details text', () => {
    renderComponentWithTheme(<Hero.Details slug="gta-v" />);

    expect(screen.getByText(/details/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
