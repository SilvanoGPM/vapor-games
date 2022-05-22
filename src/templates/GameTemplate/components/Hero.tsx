import { LightMode } from '@chakra-ui/react';
import { Animation } from 'components/Animation';

import { Hero, HeroProps } from 'components/HeroParts';

export function GameHero({
  name,
  background_image,
  publishers,
  genres,
  rating,
  metacritic,
}: HeroProps) {
  const animationBase = {
    animation: 'animate__fadeIn',
  };

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
    </Hero.Background>
  );
}
