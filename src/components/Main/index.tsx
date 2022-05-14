import { Hero } from 'components/Hero';

import { NavBar } from 'components/NavBar';

export function Main() {
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
      />

      <Hero
        title="Grand Theft Auto V"
        publisher="Rockstar Games"
        score={4.48}
        bgImage="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
        genres={['Action', 'Adventure', 'Singleplayer']}
      />
    </>
  );
}
