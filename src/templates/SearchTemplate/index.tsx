import { useState, useCallback } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Center, Flex, useToast } from '@chakra-ui/react';

import { PreviewGameType } from 'services/rawg';
import { Header } from 'components/Header';
import { Hero } from 'components/HeroParts';
import { GameCard } from 'components/GameCard';

import { SearchInput } from './components/SearchInput';

export function SearchTemplate() {
  const toast = useToast();

  const [games, setGames] = useState<PreviewGameType[]>([]);

  const [isFetchingGames, setIsFetchingGames] = useState(false);

  const handleGameValueChange = useCallback(
    async (game: string) => {
      try {
        setIsFetchingGames(true);

        const response = await fetch(`/api/games?game=${game}`);
        const games: PreviewGameType[] = await response.json();

        setGames(games);
      } catch {
        toast({
          title: 'Error trying to fetch games',
          position: 'bottom',
          status: 'error',
          isClosable: true,
          duration: 4000,
        });
      } finally {
        setIsFetchingGames(false);
      }
    },
    [toast],
  );

  return (
    <>
      <Header />

      <Hero.Background bgImage="/assets/search.jpg" h="100vh">
        <Center h="full" flexDirection="column" w="100%" maxW="500px" m="auto">
          <Hero.Title fontSize="5xl" mb="8">
            Search <SearchIcon />
          </Hero.Title>

          <SearchInput
            isLoading={isFetchingGames}
            onValueChange={handleGameValueChange}
          />
        </Center>
      </Hero.Background>

      <Flex
        gap="1rem"
        wrap="wrap"
        mt={{ base: '-100px', md: '-150px' }}
        mb={4}
        px={{ base: 2, md: 4 }}
        justifyContent="center"
      >
        {games.map((game) => (
          <GameCard key={game.slug} {...game} />
        ))}
      </Flex>
    </>
  );
}
