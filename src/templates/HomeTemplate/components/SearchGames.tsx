import {
  Button,
  Center,
  Flex,
  Icon,
  Image,
  LightMode,
  Text,
} from '@chakra-ui/react';

import Link from 'next/link';
import { AiFillEye, AiOutlineSearch } from 'react-icons/ai';

import { scrollToElement } from 'utils/scrollToElement';

export function SearchGames() {
  return (
    <Flex
      justify="space-between"
      flexDir={{ base: 'column-reverse', md: 'row' }}
    >
      <Center flex="1" flexDir="column" maxW="400px" mx="auto">
        <Icon as={AiOutlineSearch} fontSize="5xl" mb="4" />

        <Text
          fontWeight={600}
          fontSize="2xl"
          maxW="400px"
          textAlign="center"
          mb="8"
        >
          Search for your favorite{' '}
          <Text
            as="span"
            color="action.500"
            fontWeight={700}
            cursor="pointer"
            onClick={() => scrollToElement('action')}
          >
            games
          </Text>{' '}
          with our search functionality.
        </Text>

        <LightMode>
          <Link href="/search" passHref>
            <Button
              as="a"
              w="full"
              colorScheme="action"
              leftIcon={<Icon as={AiFillEye} />}
            >
              Try it
            </Button>
          </Link>
        </LightMode>
      </Center>

      <Center>
        <Image
          src="/assets/artorias.png"
          maxW={{ base: '300px', md: '350px', lg: '500px' }}
          width="100%"
        />
      </Center>
    </Flex>
  );
}
