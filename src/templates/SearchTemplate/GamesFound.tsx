import { Flex, Spinner } from '@chakra-ui/react';

import { GameCard } from 'components/GameCard';
import { PreviewGameType } from 'services/rawg';

interface GamesFoundProps {
  isFetchingGames: boolean;
  genre?: string;
  games: PreviewGameType[];
}

export function GamesFound({ isFetchingGames, genre, games }: GamesFoundProps) {
  return (
    <Flex
      gap="1rem"
      wrap="wrap"
      maxW="1400px"
      mx="auto"
      mt={{ base: '-100px', md: '-150px' }}
      mb={4}
      px={{ base: 2, md: 4 }}
      justifyContent="center"
    >
      {isFetchingGames && genre && <Spinner />}
      {games.map((game) => (
        <GameCard key={game.slug} {...game} />
      ))}
    </Flex>
  );
}
