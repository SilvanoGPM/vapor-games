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
      <Link title={name} role="group" rounded="xl">
        {children}
      </Link>
    </NextLink>
  );
}
