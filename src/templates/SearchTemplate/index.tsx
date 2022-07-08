import { useState, useCallback } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Center, Spinner, Text } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { Hero } from 'components/HeroParts';
import { formatGenreTitle } from 'utils/fomatters';
import { useSearchGame } from 'services/hooks/useSearchGame';
import { GenresType } from 'components/GenreList';

import { SearchInput } from './SearchInput';
import { useEffect } from 'react';
import { GamesFound } from './GamesFound';

type SearchTemplateProps = {
  genre?: string;
};

export function SearchTemplate({ genre }: SearchTemplateProps) {
  const [search, setSearch] = useState<Record<string, unknown>>({});

  const shouldFetchGames = Object.keys(search).length > 0;
  const isSearchByName = Boolean(search.search);

  const { data: games, isLoading } = useSearchGame(search, shouldFetchGames);

  useEffect(() => {
    if (genre) {
      setSearch({ genres: genre });
    }
  }, [genre]);

  const handleGameSearch = useCallback((game: string) => {
    setSearch({ search: game });
  }, []);

  return (
    <>
      <Header />

      <Hero.Background bgImage="/assets/search.jpg" h="100vh">
        <Center h="full" flexDirection="column" w="100%" maxW="500px" m="auto">
          <Hero.Title fontSize={genre ? '3xl' : '5xl'} mb="8" maxW="100%">
            {genre && !isSearchByName ? (
              <>
                <Text as="span" color="action.500" textDecor="underline">
                  {formatGenreTitle(genre as GenresType)}
                </Text>{' '}
                Games
                {isLoading && <Spinner ml="4" />}
              </>
            ) : (
              <>
                Search <SearchIcon />
              </>
            )}
          </Hero.Title>

          <SearchInput isLoading={isLoading} onSubmit={handleGameSearch} />
        </Center>
      </Hero.Background>

      {games && (
        <GamesFound games={games} genre={genre} isFetchingGames={isLoading} />
      )}
    </>
  );
}
