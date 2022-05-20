import { Box, Heading } from '@chakra-ui/react';

import { GameList } from 'components/GameList';
import { Header } from 'components/Header';
import { GameType } from 'services/rawg';

import { GameHero } from './components/Hero';
import { Screenshots } from './components/Screenshots';
import { Overview } from './components/Overview';

export type GameTemplateProps = {
  game: GameType;
};

export function GameTemplate({ game }: GameTemplateProps) {
  return (
    <>
      <Header />

      <GameHero {...game} />

      <Box as="section" mt={8} px={{ base: '2rem', md: '4rem' }}>
        <Overview game={game} />

        <Screenshots screenshots={game.screenshots} />

        {game.series.length > 0 && (
          <GameList
            hideScrollbars={false}
            data={game.series}
            header={
              <Heading as="h3" fontSize="4xl">
                Game serie
              </Heading>
            }
          />
        )}
      </Box>
    </>
  );
}
