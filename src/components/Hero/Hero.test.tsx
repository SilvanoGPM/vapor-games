import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';

import { Hero } from '.';

describe('<Hero />', () => {
  it('should render a hero with title, publiser and genres', () => {
    const data = {
      title: 'Grand Theft Auto V',
      publisher: { name: 'Rockstar Games', slug: 'rockstar-games' },
      genres: [
        { name: 'Action', slug: 'action' },
        { name: 'Adventure', slug: 'adventure' },
        { name: 'Singleplayer', slug: 'singleplayer' },
      ],
      rating: 5,
      bgImage:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    };

    renderComponentWithTheme(<Hero {...data} />);

    expect(screen.getByText(/grand theft auto v/i)).toBeInTheDocument();
    expect(screen.getByText(/rockstar games/i)).toBeInTheDocument();
    expect(screen.getByText(/action/i)).toBeInTheDocument();
    expect(screen.getByText(/adventure/i)).toBeInTheDocument();
    expect(screen.getByText(/singleplayer/i)).toBeInTheDocument();
  });
});
