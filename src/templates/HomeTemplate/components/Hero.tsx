import { LightMode } from '@chakra-ui/react';

import { Hero, HeroProps } from 'components/HeroParts';

export function HomeHero({
  name,
  background_image,
  publishers,
  genres,
  rating,
  metacritic,
  slug,
}: HeroProps) {
  return (
    <Hero.Background bgImage={background_image || ''}>
      <LightMode>
        <Hero.Title>{name}</Hero.Title>

        {publishers?.length > 0 && (
          <Hero.Publisher>{publishers[0].name}</Hero.Publisher>
        )}

        <Hero.Genres genres={genres} my="4" />

        <Hero.Scores rating={rating} metacritic={metacritic} mb="4" />

        <Hero.Details slug={slug} />
      </LightMode>
    </Hero.Background>
  );
}
