import { Button, Flex, LightMode } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Title } from 'components/Title';

import { ArrowRightIcon } from '@chakra-ui/icons';
import { GenresType } from '.';

interface ListHeaderProps {
  title: string;
  genre: GenresType;
}

export function ListHeader({ title, genre }: ListHeaderProps) {
  return (
    <Flex w="full" align="center" justify="space-between">
      <Title as="h3" fontSize="3xl">
        {title}
      </Title>

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
            rightIcon={<ArrowRightIcon />}
          >
            View more
          </Button>
        </NextLink>
      </LightMode>
    </Flex>
  );
}
