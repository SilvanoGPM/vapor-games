import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';

import ScrollContainer from 'react-indiana-drag-scroll';
import { FiPackage } from 'react-icons/fi';
import { MdUpdate } from 'react-icons/md';
import { formatGameDate } from 'utils/formatGameDate';

import { SteamButton } from './SteamButton';
import { EpicGamesButton } from './EpicGamesButton';
import { GameType } from 'services/rawg';

type OverviewProps = {
  game: GameType;
};

export function Overview({ game }: OverviewProps) {
  const gameIsAvailableOnSteam = game.stores.find(
    ({ store_id }) => store_id === 1,
  );

  const gameIsAvailableOnEpicGames = game.stores.find(
    ({ store_id }) => store_id === 11,
  );

  return (
    <>
      <Heading w="100%" flex="1" as="h3" mb="4">
        Overview
      </Heading>

      <Flex
        w="100%"
        h={{ base: 'auto', lg: '400px' }}
        gap="1rem"
        direction={{ base: 'column', lg: 'row' }}
        mb="8"
      >
        <Image
          src={game.background_image}
          flex="1"
          maxW={{ base: '100%', lg: '50%' }}
          objectFit="cover"
        />

        <Flex direction="column" flex="1">
          {game.description_raw && (
            <ScrollContainer
              style={{ width: '100%', maxHeight: '250px' }}
              hideScrollbars={false}
            >
              <Text fontSize="xl" flex="1" tabIndex={-1}>
                {game.description_raw}
              </Text>
            </ScrollContainer>
          )}

          <Divider my="2" />

          <Flex gap="2rem" align="center" my="4">
            <Link target="_blank" href={game.website}>
              <Text fontSize="2xl">Website</Text>
            </Link>

            <Spacer />

            <Flex align="center" direction="column">
              <FiPackage />
              <Text>{formatGameDate(game.released)}</Text>
            </Flex>

            <Flex align="center" direction="column">
              <MdUpdate />
              <Text>{formatGameDate(game.updated)}</Text>
            </Flex>
          </Flex>

          <Spacer />

          <Flex gap="1rem" wrap="wrap" w="100%">
            <SteamButton
              url={gameIsAvailableOnSteam?.url}
              disabled={!gameIsAvailableOnSteam}
            />
            <EpicGamesButton
              url={gameIsAvailableOnEpicGames?.url}
              disabled={!gameIsAvailableOnEpicGames}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
