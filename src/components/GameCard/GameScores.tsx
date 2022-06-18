import { Flex, Spacer } from '@chakra-ui/react';
import { Metacritic } from 'components/Metacritic';
import { Rating } from 'components/Rating';

interface GameScoresProps {
  rating: number;
  metacritic?: number | null;
}

export function GameScores({ metacritic, rating }: GameScoresProps) {
  return (
    <Flex
      pos="absolute"
      top={0}
      right={0}
      px={2}
      py={4}
      bgGradient="linear(to top right, transparent 40%, blackAlpha.800 80%)"
      justify="space-between"
      w="100%"
      opacity={{ base: 1, lg: 0 }}
      transition="ease-in-out"
      transitionDuration="0.2s"
      _groupHover={{ opacity: 1 }}
      _groupFocus={{ opacity: 1 }}
    >
      {metacritic !== undefined && metacritic !== null ? (
        <Metacritic size="32px" value={metacritic} />
      ) : (
        <Spacer />
      )}
      <Rating score={rating} iconSize="16px" />
    </Flex>
  );
}
