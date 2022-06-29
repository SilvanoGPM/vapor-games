import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import { GenreList, GenresType } from 'components/GenreList';
import { Header } from 'components/Header';
import { HeroProps } from 'components/HeroParts';
import { PreviewGameType } from 'services/rawg';
import { formatGenreTitle } from 'utils/fomatters';

import { HomeHero } from './components/Hero';
import { TopGenres } from './components/TopGenres';

export type HomeTemplateProps = {
  hero: HeroProps;
  genres: { [key in GenresType]: PreviewGameType[] };
};

export function HomeTemplate({ hero, genres }: HomeTemplateProps) {
  return (
    <>
      <NextSeo
        title="Vapor Games - Your favorite games in one place"
        description="Vapor is a platform to list various information from various games."
        canonical="https://vapor-games.vercel.app/"
        openGraph={{
          url: 'https://vapor-games.vercel.app/',
          title: 'Vapor Games - Your favorite games in one place',
          description:
            'Vapor is a platform to list various information from various games.',
          site_name: 'Vapor',
          images: [
            {
              url: 'https://vapor-games.vercel.app/assets/cover-v2.png',
              width: 1280,
              height: 720,
              alt: 'Vapor Games',
            },
          ],
        }}
      />

      <Header />

      <HomeHero {...hero} />

      <Box
        as="section"
        mt="8"
        maxW="1400px"
        mx="auto"
        px={{ base: '2rem', md: '4rem' }}
      >
        <TopGenres />

        {Object.entries(genres).map(([key, value]) => (
          <GenreList
            key={key}
            title={formatGenreTitle(key as GenresType)}
            genre={key as GenresType}
            data={value}
          />
        ))}
      </Box>
    </>
  );
}
