import { Flex } from '@chakra-ui/react';
import { topGenres } from '../topGenres';

import { GenreCard } from './GenreCard';

export function TopGenres() {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', lg: 'space-between' }}
      gap="1rem"
      flexWrap="wrap"
      my="16"
    >
      {topGenres.map((genre) => (
        <GenreCard key={genre.genre} {...genre} />
      ))}
    </Flex>
  );
}
