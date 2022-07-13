import {
  Button,
  LightMode,
  Stack,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';

import { HeroProps } from 'components/HeroParts';

interface GameStackProps {
  games: HeroProps[];
  selectedIndex: number;
  startAnimation: () => void;
  onSelectGame: (index: number) => void;
}

export function GameStack({
  games,
  selectedIndex,
  startAnimation,
  onSelectGame,
}: GameStackProps) {
  const gameTooltipPlacement = useBreakpointValue({
    base: 'top' as const,
    md: 'left' as const,
  });

  function handleSelectedGame(index: number) {
    return () => {
      if (selectedIndex === index) {
        return;
      }

      onSelectGame(index);
      startAnimation();
    };
  }

  return (
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
            placement={gameTooltipPlacement}
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
              border="2px"
              borderColor={
                index === selectedIndex ? 'action.500' : 'transparent'
              }
              _focus={{ outline: 'none', borderColor: 'action.500' }}
            />
          </Tooltip>
        </LightMode>
      ))}
    </Stack>
  );
}
