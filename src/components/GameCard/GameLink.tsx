import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

interface GameLinkProps {
  name: string;
  slug: string;
  children: ReactNode;
}

export function GameLink({ name, slug, children }: GameLinkProps) {
  return (
    <NextLink href={`/games/${slug}`} passHref>
      <Link
        title={name}
        role="group"
        _focus={{ outline: 'none' }}
        _focusVisible={{
          outline: 'none',
          ringColor: 'whiteAlpha.800',
          ring: 1,
          ringOffsetColor: 'rgba(0, 0, 0, 0.95)',
          ringOffset: '0.25rem',
        }}
        _light={{ _focusVisible: { ringColor: 'black' } }}
        _dark={{ _focusVisible: { ringColor: 'white' } }}
      >
        {children}
      </Link>
    </NextLink>
  );
}
