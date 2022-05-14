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
      h={{ base: '250px', md: '90vh' }}
      minH={{ base: '250px', md: '300px', lg: '550px' }}
      bgImage={bgImage}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box
        w="100%"
        h="100%"
        boxShadow="dark-lg"
        px={{ base: '2rem', lg: '4rem' }}
        color="white"
        paddingTop={{ base: '50px', md: '300px', lg: '350px' }}
        bgGradient="linear(to bottom left, transparent 10%, rgba(0, 0, 0, 0.95) 80%)"
      >
        <Heading mb="1rem">{title}</Heading>
        <Text mb="1rem">{publisher}</Text>

        <Flex gap={['0.1rem', '0.5rem']} wrap="wrap" mb="1rem" width="100%">
          {genres.map((genre) => (
            <Tag key={genre} colorScheme="whiteAlpha">
              <TagLeftIcon boxSize="12px" as={AddIcon} />
              {genre}
            </Tag>
          ))}
        </Flex>

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
      </Box>
    </Box>
  );
}
