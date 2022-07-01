import { Button, Flex, Heading, LightMode } from '@chakra-ui/react';
import NextLink from 'next/link';

import { GenresType } from '.';

interface ListHeaderProps {
  title: string;
  genre: GenresType;
}

export function ListHeader({ title, genre }: ListHeaderProps) {
  return (
    <Flex w="full" align="center" justify="space-between">
      <Heading
        as="h3"
        fontSize="3xl"
        sx={{
          '&::after': {
            content: "''",
            display: 'block',
            mt: '8px',
            bg: 'action.500',
            width: '60%',
            height: '5px',
          },
        }}
      >
        {title}
      </Heading>

      <LightMode>
        <NextLink href={`/search?genre=${genre}`} passHref>
          <Button
            as="a"
            size="sm"
            textTransform="uppercase"
            colorScheme="action"
            _focus={{ outline: 'none' }}
            _focusVisible={{
              textDecor: 'underline',
            }}
          >
            View more
          </Button>
        </NextLink>
      </LightMode>
    </Flex>
  );
}
