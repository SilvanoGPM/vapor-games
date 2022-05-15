import { Box, Heading } from '@chakra-ui/react';
import { GameList } from 'components/GameList';
import { Header } from 'components/Header';

import { GameType } from 'services/rawg';
import { GameHero } from './components/Hero';

export type GameTemplateProps = {
  game: GameType;
};

export function GameTemplate({ game }: GameTemplateProps) {
  return (
    <>
      <Header />

      <GameHero {...game} />

      <Box as="section" mt={5} px={{ base: '2rem', md: '4rem' }}>
        {game.series.length > 0 && (
          <GameList
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
