import { Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { GenresType } from '.';

interface ListHeaderProps {
  title: string;
  genre: GenresType;
}

export function ListHeader({ title, genre }: ListHeaderProps) {
  return (
    <NextLink href={`/search?genre=${genre}`} passHref>
      <Link
        fontSize="2xl"
        _focus={{ outline: 'none' }}
        _focusVisible={{
          textDecor: 'underline',
        }}
      >
        <Heading as="h3" fontSize="3xl">
          {title}
        </Heading>
      </Link>
    </NextLink>
  );
}
