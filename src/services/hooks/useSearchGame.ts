import { useQuery } from 'react-query';
import queryString from 'query-string';
import { useToast } from '@chakra-ui/react';

import { PreviewGameType } from 'services/rawg';

export function useSearchGame(
  search: Record<string, unknown>,
  startFetch: boolean,
) {
  const toast = useToast();

  return useQuery(
    ['games', search],
    async () => {
      try {
        const params = queryString.stringify(search);
        const response = await fetch(`/api/games?${params}`);
        const result: PreviewGameType[] = await response.json();

        if (result.length === 0) {
          toast({
            title: 'Games not found',
            position: 'bottom',
            status: 'warning',
            isClosable: true,
            duration: 4000,
          });
        }

        return result;
      } catch {
        toast({
          title: 'Error trying to fetch games',
          position: 'bottom',
          status: 'error',
          isClosable: true,
          duration: 4000,
        });
      }
    },
    {
      enabled: startFetch,
      staleTime: Infinity,
    },
  );
}
