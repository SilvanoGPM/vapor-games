import { Divider, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';

import ScrollContainer from 'react-indiana-drag-scroll';

import { SteamButton } from './SteamButton';
import { EpicGamesButton } from './EpicGamesButton';
import { GameType } from 'services/rawg';

type OverviewProps = {
  game: GameType;
};

const STEAM_ID = 1;
const EPIC_GAMES_ID = 11;

export function Overview({ game }: OverviewProps) {
  const gameIsAvailableOnSteam = game.stores.find(
    ({ store_id }) => store_id === STEAM_ID,
  );

  const gameIsAvailableOnEpicGames = game.stores.find(
    ({ store_id }) => store_id === EPIC_GAMES_ID,
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
          src={game.background_image_additional || game.background_image}
          flex="1"
          maxW={{ base: '100%', lg: '50%' }}
          objectFit="cover"
        />

        <Flex direction="column" flex="1">
          {game.description_raw && (
            <ScrollContainer
              style={{ width: '100%', maxHeight: '300px' }}
              hideScrollbars={false}
            >
              <Text fontSize="xl" flex="1" tabIndex={-1}>
                {game.description_raw}
              </Text>
            </ScrollContainer>
          )}

          <Divider my="2" />

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
