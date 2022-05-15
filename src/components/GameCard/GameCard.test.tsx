import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/tests/renderComponentWithTheme';
import { GameCard } from '.';

describe('<GameCard />', () => {
  test('should render card name, rating, metacritic and game link', () => {
    const data = {
      name: 'Grand Theft Auto V',
      slug: 'gta-v',
      rating: 5,
      metacritic: 92,
      background_image:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    };

    renderComponentWithTheme(<GameCard {...data} />);

    expect(screen.getByText(/grand theft auto v/i)).toBeInTheDocument();
    expect(screen.getByText(/92/i)).toBeInTheDocument();
  });

  test('should render card name, rating and game link, but not metacritic', () => {
    const data = {
      name: 'Grand Theft Auto V',
      slug: 'gta-v',
      rating: 5,
      background_image:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    };

    renderComponentWithTheme(<GameCard {...data} />);

    expect(screen.getByText(/grand theft auto v/i)).toBeInTheDocument();
    expect(screen.queryByText(/92/i)).toBeNull();
  });
});
