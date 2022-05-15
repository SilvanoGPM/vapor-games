import { LightMode } from '@chakra-ui/react';

import { Hero, HeroProps } from 'components/HeroParts';

export function GameHero({
  name,
  background_image,
  publishers,
  genres,
  rating,
  metacritic,
}: HeroProps) {
  return (
    <Hero.Background bgImage={background_image}>
      <LightMode>
        <Hero.Title>{name}</Hero.Title>

        {publishers.length > 0 && (
          <Hero.Publisher mb="4">{publishers[0].name}</Hero.Publisher>
        )}

        <Hero.Genres genres={genres} mb="4" />

        <Hero.Scores rating={rating} metacritic={metacritic} mb="4" />
      </LightMode>
    </Hero.Background>
  );
}
