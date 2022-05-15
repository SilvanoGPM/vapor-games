import { Box, useColorModeValue } from '@chakra-ui/react';
import { GenreList } from 'components/GenreList';
import { Hero, HeroProps } from 'components/Hero';

import { NavBar } from 'components/NavBar';

export type HomeTemplateProps = {
  hero: HeroProps;
};

export function HomeTemplate({ hero }: HomeTemplateProps) {
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
        <GenreList title="Action" genre="action" />
      </Box>
    </>
  );
}
