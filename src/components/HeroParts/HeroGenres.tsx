import { Flex, FlexProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { GenreType } from 'services/rawg';
import { GameTag } from 'components/GameTag';

export type HeroGenresProps = {
  genres: GenreType[];
} & FlexProps;

export function HeroGenres({ genres, ...props }: HeroGenresProps) {
  return (
    <Flex
      gap="0.5rem"
      wrap="wrap"
      width="100%"
      maxW={{ base: '300px', md: '400px' }}
      {...props}
    >
      {genres.map(({ name, slug }) => (
        <NextLink key={slug} href={`/search?genre=${slug}`} passHref>
          <Link
            _focus={{ outline: 'none' }}
            _focusVisible={{
              outline: 'none',
              ringColor: 'whiteAlpha.800',
              ring: 1,
              ringOffsetColor: 'rgba(0, 0, 0, 0.95)',
              ringOffset: '0.2rem',
            }}
          >
            <GameTag text={name} />
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
}
