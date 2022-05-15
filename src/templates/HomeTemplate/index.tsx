import { Box } from '@chakra-ui/react';

import { GenreList, GenresType } from 'components/GenreList';
import { Header } from 'components/Header';
import { HeroProps } from 'components/HeroParts';
import { GameType } from 'services/rawg';

import { formatGenreTitle } from 'utils/formatGenreTitle';
import { HomeHero } from './components/Hero';

export type HomeTemplateProps = {
  hero: HeroProps;
  genres: { [key in GenresType]: GameType[] };
};

export function HomeTemplate({ hero, genres }: HomeTemplateProps) {
  return (
    <>
      <Header />

      <HomeHero {...hero} />

      <Box as="section" mt={5} px={{ base: '2rem', md: '4rem' }}>
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
