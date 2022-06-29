import { useState } from 'react';

import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Divider,
  Tooltip,
  Center,
} from '@chakra-ui/react';

import { IconType } from 'react-icons';
import { AiFillWindows, AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { FaPlaystation, FaXbox, FaLinux } from 'react-icons/fa';
import { CgMore } from 'react-icons/cg';

import { GameType } from 'services/rawg';
import { formatGameStrDate } from 'utils/fomatters';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type DetailsProps = {
  game: GameType;
};

const platformsIcons = {
  pc: AiFillWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: AiFillApple,
  android: AiFillAndroid,
  linux: FaLinux,
};

export function Details({ game }: DetailsProps) {
  const [hasOthersPlatforms, setHasOthersPlatforms] = useState(false);

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
      <Box mb="8" as="section">
        <Center justifyContent="space-between" mb="4">
          <Heading w="100%" flex="1" as="h3">
            Game Details
          </Heading>

          {game.website && (
            <Link
              fontSize="xl"
              href={game.website}
              color="action"
              fontWeight="bold"
              target="_blank"
              _focus={{ outline: 'none' }}
              _focusVisible={{
                outline: 'none',
                textDecor: 'underline',
              }}
            >
              Website
            </Link>
          )}
        </Center>

        <Flex wrap="wrap" pb="8" gap={{ base: '1rem', lg: '3rem' }} h="100%">
          <Box flex="1" maxW={{ base: '100%', lg: '300px' }} minW="200px">
            <Text fontSize="xl" mb="0.4rem">
              Publisher
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              {game.publishers[0].name}
            </Text>
          </Box>

          <Box flex="1" maxW={{ base: '100%', lg: '300px' }} minW="200px">
            <Text fontSize="xl" mb="0.4rem">
              Developer
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              {game.developers[0].name}
            </Text>
          </Box>

          <Box flex="1" maxW={{ base: '100%', lg: '300px' }} minW="200px">
            <Text fontSize="xl">Release Date</Text>
            <Text fontSize="xl" fontWeight="bold">
              {formatGameStrDate(game.released)}
            </Text>
          </Box>

          <Flex
            flex="1"
            justifyContent="left"
            maxW={{ base: '100%', lg: '300px' }}
            minW="200px"
            pos="relative"
            wrap="wrap"
            direction="column"
          >
            <Text fontSize="xl" mb="0.4rem">
              Platforms
            </Text>

            <Flex wrap="wrap" gap="1rem" maxW="300px">
              {game.parent_platforms.map(({ platform }) => {
                const PlatformIcon = platformsIcons[platform.slug] as IconType;

                if (!PlatformIcon) {
                  if (!hasOthersPlatforms) {
                    setHasOthersPlatforms(true);
                  }

                  return null;
                }

                return (
                  <Tooltip
                    key={platform.slug}
                    placement="bottom"
                    label={platform.name}
                  >
                    <Box>
                      <PlatformIcon size={20} />
                    </Box>
                  </Tooltip>
                );
              })}

              {hasOthersPlatforms && (
                <Tooltip placement="bottom" label="Others">
                  <Box>
                    <CgMore />
                  </Box>
                </Tooltip>
              )}
            </Flex>
          </Flex>
        </Flex>

        <Divider />
      </Box>
    </AnimationOnScroll>
  );
}
