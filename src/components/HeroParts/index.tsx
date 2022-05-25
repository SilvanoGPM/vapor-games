import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Link,
  Text,
  TextProps,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { ArrowRightIcon } from '@chakra-ui/icons';

import { Rating } from 'components/Rating';
import { GameTag } from 'components/GameTag';
import { GenreType, PublisherType } from 'services/rawg';
import { Metacritic } from 'components/Metacritic';

export type HeroProps = {
  name: string;
  slug: string;
  publishers: PublisherType[];
  background_image: string | null;
  genres: GenreType[];
  rating: number;
  metacritic?: number | null;
};

export type HeroGenresProps = {
  genres: GenreType[];
} & FlexProps;

export type HeroScoresProps = {
  rating: number;
  metacritic?: number | null;
} & FlexProps;

export type HeroDetailsProps = {
  slug: string;
} & ButtonProps;

function Background({ bgImage, children, ...props }: BoxProps) {
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
          filter: 'brightness(0.6)',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          bgPos: ['center', 'top'],
        },
      }}
      {...props}
    >
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        flexDir="column"
        justify="flex-end"
        boxShadow="dark-lg"
        py="1rem"
        px={{ base: '2rem', md: '4rem' }}
        color="white"
        bgGradient="linear(to bottom left, transparent 10%, rgba(0, 0, 0, 0.95) 80%)"
      >
        {children}
      </Flex>
    </Box>
  );
}

function Title({ children, ...props }: HeadingProps) {
  return (
    <Heading
      maxW={{ base: '300px', md: '400px' }}
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  );
}

function Publisher({ children, ...props }: TextProps) {
  return (
    <Text
      maxW={{ base: '300px', md: '400px' }}
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Text>
  );
}

function Genres({ genres, ...props }: HeroGenresProps) {
  return (
    <Flex
      gap="0.5rem"
      wrap="wrap"
      width="100%"
      maxW={{ base: '300px', md: '400px' }}
      {...props}
    >
      {genres.map(({ name, slug }) => (
        <NextLink key={slug} href={`/search?genre=${slug}`} passHref>
          <Link
            _focus={{
              outline: 'none',
              ringColor: 'whiteAlpha.800',
              ring: 1,
              ringOffsetColor: 'rgba(0, 0, 0, 0.95)',
              ringOffset: '0.2rem',
            }}
          >
            <GameTag text={name} />
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
}

function Scores({ rating, metacritic, ...props }: HeroScoresProps) {
  return (
    <Flex gap="1rem" {...props}>
      <Rating score={rating} iconSize="20px" />
      {metacritic !== undefined && metacritic !== null && (
        <Metacritic size="32px" value={metacritic} />
      )}
    </Flex>
  );
}

function Details({ slug, ...props }: HeroDetailsProps) {
  return (
    <NextLink href={`/games/${slug}`} passHref>
      <Link tabIndex={-1} _focus={{ outline: 'none' }} maxW="400px" w="100%">
        <Button
          colorScheme="whiteAlpha"
          rightIcon={<ArrowRightIcon />}
          width="100%"
          _focus={{
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

export const Hero = {
  Background,
  Details,
  Title,
  Publisher,
  Scores,
  Genres,
};
