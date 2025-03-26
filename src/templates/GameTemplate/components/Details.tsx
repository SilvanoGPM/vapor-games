import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  LightMode,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import { IconType } from 'react-icons';
import { AiFillAndroid, AiFillApple, AiFillWindows } from 'react-icons/ai';
import { CgMore } from 'react-icons/cg';
import { FaLinux, FaPlaystation, FaXbox } from 'react-icons/fa';

import { Title } from 'components/Title';
import { BiGlobe } from 'react-icons/bi';
import { GameType } from 'services/rawg';
import { formatGameStrDate } from 'utils/fomatters';

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
          <Title as="h3">Game Details</Title>

          {game.website && (
            <LightMode>
              <Button
                as="a"
                href={game.website}
                target="_blank"
                size="sm"
                textTransform="uppercase"
                colorScheme="action"
                _focus={{ outline: 'none' }}
                _focusVisible={{
                  textDecor: 'underline',
                }}
                leftIcon={<BiGlobe />}
              >
                Website
              </Button>
            </LightMode>
          )}
        </Center>

        <Flex wrap="wrap" pb="8" gap={{ base: '1rem', lg: '3rem' }} h="100%">
          <Box flex="1" maxW={{ base: '100%', lg: '300px' }} minW="200px">
            <Text fontSize="xl" mb="0.4rem" color="gray.500">
              Publisher
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              {game?.publishers?.[0]?.name || 'No informations'}
            </Text>
          </Box>

          <Box flex="1" maxW={{ base: '100%', lg: '300px' }} minW="200px">
            <Text fontSize="xl" mb="0.4rem" color="gray.500">
              Developer
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              {game?.developers?.[0]?.name || 'No informations'}
            </Text>
          </Box>

          <Box flex="1" maxW={{ base: '100%', lg: '300px' }} minW="200px">
            <Text fontSize="xl" color="gray.500">
              Release Date
            </Text>

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
            <Text fontSize="xl" mb="0.4rem" color="gray.500">
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
                    color="white"
                    bg="action.500"
                  >
                    <Box>
                      <PlatformIcon size={20} />
                    </Box>
                  </Tooltip>
                );
              })}

              {hasOthersPlatforms && (
                <Tooltip
                  placement="bottom"
                  label="Others"
                  color="white"
                  bg="action.500"
                >
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
