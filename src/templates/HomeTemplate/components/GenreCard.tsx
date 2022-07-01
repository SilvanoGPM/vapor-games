import { Box, Center, Image, Text } from '@chakra-ui/react';

import { GenresType } from 'components/GenreList';
import { scrollToElement } from 'utils/scrollToElement';

interface GenreCardProps {
  image: string;
  title: string;
  emoji: string;
  genre: GenresType;
}

export function GenreCard({ image, title, emoji, genre }: GenreCardProps) {
  return (
    <Box
      as="button"
      pos="relative"
      w={{ base: '120px', md: '160px' }}
      h={{ base: '120px', md: '160px' }}
      role="group"
      onClick={() => scrollToElement(genre)}
      _focusVisible={{
        outline: 'none',
        _dark: { border: '1px solid white' },
        _light: { border: '1px solid black' },
      }}
    >
      <Box pos="absolute" top="0" bottom="0" left="0" right="0">
        <Image h="100%" objectFit="cover" alt={title} src={image} />
      </Box>

      <Box pos="absolute" top="0" bottom="0" left="0" right="0" zIndex="docked">
        <Center
          h="full"
          textAlign="center"
          flexDir="column"
          bg="blackAlpha.800"
          overflow="hidden"
          color="white"
        >
          <Text
            as="span"
            display="block"
            fontSize="3xl"
            transition="0.2s"
            opacity={{ base: '1', lg: '0' }}
            transform={{ base: 'translateY(0)', lg: 'translateY(-200%)' }}
            _groupHover={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
            _groupFocusVisible={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
          >
            {emoji}
          </Text>

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight={700}
            transition="0.2s"
            opacity={{ base: '1', lg: '0' }}
            transform={{ base: 'translateY(0)', lg: 'translateY(200%)' }}
            _groupHover={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
            _groupFocusVisible={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
          >
            {title}
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
