import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react';
import ScrollContainer from 'react-indiana-drag-scroll';
import NextLink from 'next/link';

import { GameCard } from 'components/GameCard';

import { GameType } from 'services/rawg';

export type GenresType =
  | 'action'
  | 'adventure'
  | 'indie'
  | 'shooter'
  | 'puzzle'
  | 'sports'
  | 'platformer'
  | 'strategy'
  | 'fighting'
  | 'role-playing-games-rpg';

type GenreListProps = {
  title: string;
  genre: GenresType;
  data: GameType[];
};

export function GenreList({ title, genre, data }: GenreListProps) {
  return (
    <Box w="100%" mb={50}>
      <Flex mb={2} px={2} justify="space-between" align="center">
        <Heading as="h3" fontSize="4xl">
          {title}
        </Heading>

        <NextLink href={`/games?genre=${genre}`} passHref>
          <Link
            fontSize="2xl"
            _focus={{
              textDecor: 'underline',
            }}
          >
            See more
          </Link>
        </NextLink>
      </Flex>

      <HStack spacing={8} overflow="auto" py={4} px={2} as={ScrollContainer}>
        {data.map(({ slug, bgImage, title, metacritic, rating }) => (
          <GameCard
            key={slug}
            background_image={bgImage}
            name={title}
            slug={slug}
            rating={rating}
            metacritic={metacritic}
          />
        ))}
      </HStack>
    </Box>
  );
}
