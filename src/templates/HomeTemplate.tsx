import { Box, useColorModeValue } from '@chakra-ui/react';

import { GenreList, GenresType } from 'components/GenreList';
import { Hero, HeroProps } from 'components/Hero';
import { NavBar } from 'components/NavBar';
import { GameType } from 'services/rawg';
import { formatGenreTitle } from 'utils/formatGenreTitle';

export type HomeTemplateProps = {
  hero: HeroProps;
  genres: { [key in GenresType]: GameType[] };
};

export function HomeTemplate({ hero, genres }: HomeTemplateProps) {
  const navbarBgSelected = useColorModeValue('#eeeeee', '#262626');

  const navbarColorSelected = useColorModeValue(
    { base: 'black', md: 'white' },
    'white',
  );

  return (
    <>
      <NavBar
        zIndex={100}
        pos="absolute"
        top={{ base: 0, md: '2rem' }}
        left="50%"
        transform="translateX(-50%)"
        maxWidth="1250px"
        width={{ base: '100%', md: '90%' }}
        rounded={{ base: 'none', md: '2xl' }}
        bg="transparent"
        color="white"
        bgSelected={{ base: navbarBgSelected, md: 'transparent' }}
        colorSelected={navbarColorSelected}
      />

      <Hero {...hero} />

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
