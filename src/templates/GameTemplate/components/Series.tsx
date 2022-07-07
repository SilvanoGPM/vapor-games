import { AnimationOnScroll } from 'react-animation-on-scroll';

import { GameList } from 'components/GameList';
import { GameType } from 'services/rawg';
import { Title } from 'components/Title';

type SeriesProps = { game: GameType };

export function Series({ game }: SeriesProps) {
  if (game.series.length === 0) {
    return null;
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
      <GameList
        hideScrollbars={false}
        listStyle={{ mb: 4 }}
        data={game.series}
        header={
          <Title as="h3" mb={4}>
            Game Serie
          </Title>
        }
      />
    </AnimationOnScroll>
  );
}
