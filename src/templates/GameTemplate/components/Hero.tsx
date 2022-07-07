import { Box, DarkMode, LightMode } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Animation } from 'components/Animation';
import { GameActions } from 'components/GameActions';
import { Hero, HeroProps } from 'components/HeroParts';

const animationBase = {
  animation: 'animate__fadeIn',
};

export function GameHero({
  name,
  background_image,
  publishers,
  genres,
  rating,
  metacritic,
}: HeroProps) {
  const { status } = useSession();

  const isUserLoggedIn = status === 'authenticated';

  return (
    <Hero.Background bgImage={background_image || ''}>
      <LightMode>
        <Animation {...animationBase}>
          <Hero.Title>{name}</Hero.Title>
        </Animation>

        {publishers?.length > 0 && (
          <Animation {...animationBase} delay="0.3s">
            <Hero.Publisher>{publishers[0].name}</Hero.Publisher>
          </Animation>
        )}

        <Animation {...animationBase} delay="0.7s">
          <Hero.Genres genres={genres} my="4" />
        </Animation>

        <Animation {...animationBase} delay="1s">
          <Hero.Scores rating={rating} metacritic={metacritic} mb="4" />
        </Animation>
      </LightMode>

      {isUserLoggedIn && (
        <Box pos="absolute" right="1rem" bottom={{ base: '-3rem', md: '1rem' }}>
          <DarkMode>
            <GameActions gameName={name} />
          </DarkMode>
        </Box>
      )}
    </Hero.Background>
  );
}
