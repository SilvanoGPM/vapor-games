import { Box, useColorModeValue } from '@chakra-ui/react';
import { GenreList } from 'components/GenreList';
import { Hero, HeroProps } from 'components/Hero';

import { NavBar } from 'components/NavBar';

export type HomeTemplateProps = {
  hero: HeroProps;
};

export function HomeTemplate({ hero }: HomeTemplateProps) {
  const navbarBgSelected = useColorModeValue('gray.300', '#262626');

  const navbarColorSelected = useColorModeValue(
    { base: 'black' },
    { base: 'white', md: 'black' },
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
        bg={{ base: 'transparent', md: 'blackAlpha.300' }}
        color="white"
        bgSelected={{ base: navbarBgSelected, md: 'white' }}
        colorSelected={navbarColorSelected}
      />

      <Hero {...hero} />

      <Box as="section" mt={5} px={{ base: '2rem', md: '4rem' }}>
        <GenreList title="Ação" genre="action" />
      </Box>
    </>
  );
}
