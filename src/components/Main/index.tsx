import { Hero } from 'components/Hero';

export function Main() {
  return (
    <Hero
      title="Grand Theft Auto V"
      publisher="Rockstar Games"
      bgImage="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
      genres={['Action', 'Adventure', 'Singleplayer']}
    />
  );
}
