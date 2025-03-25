import { Box, LightMode, useBoolean } from '@chakra-ui/react';
import { useState } from 'react';

import { Animation } from 'components/Animation';
import { Hero, HeroProps } from 'components/HeroParts';
import { GameStack } from './GameStack';

interface HomeHeroProps {
  games: HeroProps[];
}

export function HomeHero({ games }: HomeHeroProps) {
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [animate, animateActions] = useBoolean(true);

  const {
    name,
    background_image,
    publishers,
    genres,
    rating,
    metacritic,
    slug,
  } = games[selectedGameIndex];

  const animationBase = {
    animation: animate ? 'animate__fadeInLeft' : '',
  };

  return (
    <Hero.Background
      bgImage={background_image || ''}
      h="100vh"
      pb={{ base: '0', md: '20' }}
    >
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

        <Animation
          {...animationBase}
          delay="1.3s"
          maxW="400px"
          w="100%"
          onAnimationEnd={() => {
            animateActions.off();
          }}
        >
          <Hero.Details slug={slug} />
        </Animation>
      </LightMode>

      <Box width="100%" height={{ base: '150px', md: '0' }} />

      <GameStack
        selectedIndex={selectedGameIndex}
        games={games}
        startAnimation={animateActions.on}
        onSelectGame={setSelectedGameIndex}
      />
    </Hero.Background>
  );
}
