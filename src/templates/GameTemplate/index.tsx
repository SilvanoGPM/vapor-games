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

      <GameHero
        {...game}
        background_image={
          game.background_image_additional || game.background_image
        }
      />

      <Box as="section" mt={8} px={{ base: '2rem', md: '4rem' }}>
        <Overview game={game} />

        <Screenshots screenshots={game.screenshots} />

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
