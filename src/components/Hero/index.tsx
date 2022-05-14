import {
  Box,
  Button,
  Flex,
  Heading,
  Tag,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react';

import { AddIcon, ArrowRightIcon } from '@chakra-ui/icons';

import { Rating } from 'components/Rating';

type HeroProps = {
  title: string;
  publisher: string;
  bgImage: string;
  genres: string[];
};

export function Hero({ title, publisher, bgImage, genres }: HeroProps) {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: '350px', md: '90vh' }}
      minH={{ base: '250px', md: '300px', lg: '550px' }}
      bgImage={bgImage}
      bgSize="cover"
      bgPos={['center', 'top']}
      transition="ease-in-out"
      transitionDuration="0.2s"
      bgRepeat="no-repeat"
    >
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        justifyContent="flex-end"
        boxShadow="dark-lg"
        py="1rem"
        px={{ base: '2rem', md: '4rem' }}
        color="white"
        bgGradient="linear(to bottom left, transparent 10%, rgba(0, 0, 0, 0.95) 80%)"
      >
        <Heading mb="1rem">{title}</Heading>
        <Text fontSize="1.5rem" mb="1rem">
          {publisher}
        </Text>

        <Flex gap="0.5rem" wrap="wrap" mb="1rem" width="100%">
          {genres.map((genre) => (
            <Tag key={genre} colorScheme="whiteAlpha">
              <TagLeftIcon boxSize="12px" as={AddIcon} />
              {genre}
            </Tag>
          ))}
        </Flex>

        <Rating score={1.6} iconSize="20px" mb="1rem" />

        <Button
          colorScheme="whiteAlpha"
          rightIcon={<ArrowRightIcon />}
          width="100%"
          maxW="400px"
          _focus={{
            outline: 'none',
            ringColor: 'whiteAlpha.800',
            ring: 1,
            ringOffsetColor: 'rgba(0, 0, 0, 0.95)',
            ringOffset: '0.2rem',
          }}
        >
          Detalhes
        </Button>
      </Flex>
    </Box>
  );
}
