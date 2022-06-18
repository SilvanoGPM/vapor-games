import { useState, useCallback } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Center, Flex, Spinner, useToast } from '@chakra-ui/react';
import queryString from 'query-string';

import { PreviewGameType } from 'services/rawg';
import { Header } from 'components/Header';
import { Hero } from 'components/HeroParts';
import { GameCard } from 'components/GameCard';

import { SearchInput } from './components/SearchInput';
import { useEffect } from 'react';

type SearchTemplateProps = {
  genre?: string;
};

export function SearchTemplate({ genre }: SearchTemplateProps) {
  const toast = useToast();

  const [games, setGames] = useState<PreviewGameType[]>([]);

  const [isFetchingGames, setIsFetchingGames] = useState(false);

  const fetchGames = useCallback(
    async (query: Record<string, unknown>) => {
      try {
        setIsFetchingGames(true);

        const params = queryString.stringify(query);
        const response = await fetch(`/api/games?${params}`);
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

  useEffect(() => {
    if (genre) {
      fetchGames({ genres: genre });
    }
  }, [genre, fetchGames]);

  const handleGameValueChange = useCallback(
    (game: string) => {
      fetchGames({ search: game });
    },
    [fetchGames],
  );

  return (
    <>
      <Header />

      <Hero.Background bgImage="/assets/search.jpg" h="100vh">
        <Center h="full" flexDirection="column" w="100%" maxW="500px" m="auto">
          <Hero.Title fontSize={genre ? '3xl' : '5xl'} mb="8" maxW="100%">
            {genre ? (
              `Searching genre: "${genre}"`
            ) : (
              <>
                Search <SearchIcon />
              </>
            )}
          </Hero.Title>

          {!genre && (
            <SearchInput
              isLoading={isFetchingGames}
              onValueChange={handleGameValueChange}
            />
          )}
        </Center>
      </Hero.Background>

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
    </>
  );
}
