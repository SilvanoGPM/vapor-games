import { Box } from '@chakra-ui/react';

import { GameImage } from './GameImage';
import { GameLink } from './GameLink';
import { GameScores } from './GameScores';
import { GameTitle } from './GameTitle';

type GameCardProps = {
  slug: string;
  name: string;
  background_image: string | null;
  rating: number;
  metacritic?: number | null;
};

export function GameCard({
  slug,
  name,
  background_image,
  rating,
  metacritic,
}: GameCardProps) {
  return (
    <GameLink slug={slug} name={name}>
      <Box
        w={{ base: 250, md: 300 }}
        h={{ base: 350, md: 400 }}
        overflow="hidden"
        pos="relative"
        cursor="pointer"
        shadow="2xl"
        transition="ease-in-out 0.2s"
        rounded="xl"
      >
        <GameImage name={name} src={background_image} />

        <GameScores rating={rating} metacritic={metacritic} />

        <GameTitle name={name} />
      </Box>
    </GameLink>
  );
}
