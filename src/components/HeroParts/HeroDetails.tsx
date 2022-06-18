import { ArrowRightIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export type HeroDetailsProps = {
  slug: string;
} & ButtonProps;

export function HeroDetails({ slug, ...props }: HeroDetailsProps) {
  return (
    <NextLink href={`/games/${slug}`} passHref>
      <Link
        tabIndex={-1}
        _focus={{ outline: 'none' }}
        _focusVisible={{ outline: 'none' }}
        maxW="400px"
        w="100%"
      >
        <Button
          colorScheme="whiteAlpha"
          rightIcon={<ArrowRightIcon />}
          width="100%"
          _focus={{ outline: 'none' }}
          _focusVisible={{
            outline: 'none',
            ringColor: 'whiteAlpha.800',
            ring: 1,
            ringOffsetColor: 'rgba(0, 0, 0, 0.95)',
            ringOffset: '0.2rem',
          }}
          {...props}
        >
          Details
        </Button>
      </Link>
    </NextLink>
  );
}
