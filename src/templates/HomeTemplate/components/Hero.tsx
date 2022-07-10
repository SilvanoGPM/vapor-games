import { useState } from 'react';

import {
  Button,
  LightMode,
  Stack,
  Tooltip,
  useBoolean,
} from '@chakra-ui/react';

import { Animation } from 'components/Animation';
import { Hero, HeroProps } from 'components/HeroParts';

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

  function handleSelectedGame(index: number) {
    return () => {
      setSelectedGameIndex(index);
      animateActions.on();
    };
  }

  const animationBase = {
    animation: animate ? 'animate__fadeInLeft' : '',
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

      <Stack
        pos="absolute"
        right={{ base: '2rem', md: '4rem' }}
        left={{ base: '2rem', md: 'unset' }}
        bottom={{ base: '-6rem', md: '1rem' }}
        direction={{ base: 'row', md: 'column' }}
        justify="space-between"
      >
        {games.map((game, index) => (
          <LightMode key={game.slug}>
            <Tooltip
              placement="left"
              label={game.name}
              hasArrow
              openDelay={500}
            >
              <Button
                onClick={handleSelectedGame(index)}
                w="100px"
                h="60px"
                rounded="xl"
                bg="whiteAlpha.500"
                bgImage={game.background_image || ''}
                bgSize="cover"
                bgPos="center"
                variant="unstyled"
              />
            </Tooltip>
          </LightMode>
        ))}
      </Stack>
    </Hero.Background>
  );
}
