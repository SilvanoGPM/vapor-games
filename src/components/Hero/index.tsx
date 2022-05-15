import { Box, Button, Flex, Heading, LightMode, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

import { Rating } from 'components/Rating';
import { GameTag } from 'components/GameTag';
import { GenrerType, PublisherType } from 'services/rawg';

export type HeroProps = {
  title: string;
  publisher: PublisherType;
  bgImage: string;
  genres: GenrerType[];
  rating: number;
};

export function Hero({ title, publisher, bgImage, genres, rating }: HeroProps) {
  return (
    <Box
      as="section"
      w="100%"
      pos="relative"
      h={{ base: '400px', md: '95vh' }}
      minH={{ base: '250px', md: '300px', lg: '550px' }}
      transition="ease-in-out 0.2s"
      sx={{
        '&::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgImage,
          filter: 'brightness(0.5)',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          bgPos: ['center', 'top'],
        },
      }}
    >
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        flexDir="column"
        justifyContent="flex-end"
        boxShadow="dark-lg"
        py="1rem"
        px={{ base: '2rem', md: '4rem' }}
        color="white"
        bgGradient="linear(to bottom left, transparent 10%, rgba(0, 0, 0, 0.95) 80%)"
      >
        <LightMode>
          <Heading maxW="400px">{title}</Heading>

          <Text mb="1rem" maxW="400px">
            {publisher.name}
          </Text>

          <Flex gap="0.5rem" wrap="wrap" mb="1rem" width="100%">
            {genres.map(({ name, slug }) => (
              <GameTag key={slug} text={name} />
            ))}
          </Flex>

          <Rating score={rating} iconSize="20px" mb="1rem" />

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
        </LightMode>
      </Flex>
    </Box>
  );
}
