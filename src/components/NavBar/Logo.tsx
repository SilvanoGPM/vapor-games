import { Box, BoxProps, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <NextLink href="/" passHref>
        <Link
          _focus={{ outline: 'none' }}
          _focusVisible={{ textDecor: 'underline' }}
          _hover={{ textDecor: 'none' }}
        >
          <Text
            fontSize="4xl"
            fontWeight="extrabold"
            letterSpacing={8}
            textTransform="uppercase"
          >
            Vapor
          </Text>
        </Link>
      </NextLink>
    </Box>
  );
}
