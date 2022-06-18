import { useState, useCallback } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Center, useToast } from '@chakra-ui/react';
import queryString from 'query-string';

import { PreviewGameType } from 'services/rawg';
import { Header } from 'components/Header';
import { Hero } from 'components/HeroParts';

import { SearchInput } from './SearchInput';
import { useEffect } from 'react';
import { GamesFound } from './GamesFound';

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

      <GamesFound
        games={games}
        genre={genre}
        isFetchingGames={isFetchingGames}
      />
    </>
  );
}
