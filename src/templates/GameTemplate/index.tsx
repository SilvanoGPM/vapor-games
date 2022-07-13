import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import { Header } from 'components/Header';
import { GameType } from 'services/rawg';

import { GameHero } from './components/Hero';
import { Screenshots } from './components/Screenshots';
import { Overview } from './components/Overview';
import { Details } from './components/Details';
import { Series } from './components/Series';
import dynamic from 'next/dynamic';

const Trailer = dynamic(
  async () => {
    const { Trailer } = await import('./components/Trailer');
    return Trailer;
  },
  {
    ssr: false,
  },
);

type GameVideo = {
  name: string;
  video_id: string;
};

export type GameTemplateProps = {
  game: GameType;
  videos: GameVideo[];
};

export function GameTemplate({ game, videos }: GameTemplateProps) {
  const gameTrailer =
    videos.find((video) => video.name === 'Gameplay Trailer') ||
    videos.find((video) => video.name === 'Trailer') ||
    videos[0];

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

        <Box
          as="section"
          maxW="1400px"
          mx="auto"
          mt={8}
          px={{ base: '2rem', md: '4rem' }}
        >
          {gameTrailer && <Trailer trailerId={gameTrailer.video_id} />}

          <Overview game={game} />

          <Details game={game} />

          <Screenshots screenshots={game.screenshots} />

          <Series game={game} />
        </Box>
      </Box>
    </>
  );
}
