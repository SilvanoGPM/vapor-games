import { Box, Center, Image, Text } from '@chakra-ui/react';

import { GenresType } from 'components/GenreList';

interface GenreCardProps {
  image: string;
  title: string;
  emoji: string;
  genre: GenresType;
}

export function GenreCard({ image, title, emoji, genre }: GenreCardProps) {
  function handleScrollTo() {
    const $section = document.querySelector(`[data-scroll="${genre}"]`);

    if (!$section) {
      return;
    }

    $section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <Box
      as="button"
      pos="relative"
      w="160px"
      h="160px"
      role="group"
      onClick={handleScrollTo}
      _focus={{
        outline: 'none',
        _dark: { border: '1px solid white' },
        _light: { border: '1px solid black' },
      }}
    >
      <Box pos="absolute" top="0" bottom="0" left="0" right="0">
        <Image h="100%" objectFit="cover" alt={title} src={image} />
      </Box>

      <Box
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        zIndex="overlay"
      >
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
            fontSize="2xl"
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
