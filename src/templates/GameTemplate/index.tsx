import { Box, Heading } from '@chakra-ui/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { NextSeo } from 'next-seo';

import { GameList } from 'components/GameList';
import { Header } from 'components/Header';
import { GameType } from 'services/rawg';

import { GameHero } from './components/Hero';
import { Screenshots } from './components/Screenshots';
import { Overview } from './components/Overview';
import { Details } from './components/Details';

export type GameTemplateProps = {
  game: GameType;
};

export function GameTemplate({ game }: GameTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${game.name} - Vapor Games`}
        description={game.description_raw || 'No description'}
        canonical="https://vapor-games.vercel.app/"
        openGraph={{
          url: 'https://vapor-games.vercel.app/',
          title: `${game.name} - Vapor Games`,
          description: game.description_raw || 'No description',
          images: [
            {
              url:
                game.background_image ||
                'https://vapor-games.vercel.app/assets/game-fallback.png',
              width: 1280,
              height: 720,
              alt: game.name,
            },
          ],
        }}
      />

      <Box as="main" overflow="hidden">
        <Header />

        <GameHero {...game} />

        <Box as="section" mt={8} px={{ base: '2rem', md: '4rem' }}>
          <Overview game={game} />

          <Details game={game} />

          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
            <Screenshots screenshots={game.screenshots} />
          </AnimationOnScroll>

          {game.series.length > 0 && (
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
          )}
        </Box>
      </Box>
    </>
  );
}
