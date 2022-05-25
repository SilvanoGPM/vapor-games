import { Heading } from '@chakra-ui/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { GameList } from 'components/GameList';
import { GameType } from 'services/rawg';

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
          <Heading as="h3" fontSize="4xl" mb={4}>
            Game Serie
          </Heading>
        }
      />
    </AnimationOnScroll>
  );
}
