import { Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { PreviewGameType } from 'services/rawg';
import { GameList } from 'components/GameList';

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
  data: PreviewGameType[];
};

export function GenreList({ title, genre, data }: GenreListProps) {
  return (
    <GameList
      data={data}
      header={
        <>
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
        </>
      }
    />
  );
}
