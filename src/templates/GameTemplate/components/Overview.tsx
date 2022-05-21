import {
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollContainer from 'react-indiana-drag-scroll';

import { SteamButton } from './SteamButton';
import { EpicGamesButton } from './EpicGamesButton';
import { GameType } from 'services/rawg';

type OverviewProps = {
  game: GameType;
};

const STEAM_ID = 1;
const EPIC_GAMES_ID = 11;

const fallbackImage = '/assets/game-fallback.png';

export function Overview({ game }: OverviewProps) {
  const descriptionMaxWidth = useBreakpointValue({ base: '100%', lg: '50%' });

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
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          animateOnce
          style={{
            minWidth: descriptionMaxWidth,
          }}
        >
          <Image
            src={
              game.background_image_additional ||
              game.background_image ||
              fallbackImage
            }
            w="100%"
            h="100%"
            flex="1"
            objectFit="cover"
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          style={{ flex: 1 }}
          animateIn="animate__slideInRight"
          animateOnce
        >
          <AnimationOnScroll
            style={{ height: '100%' }}
            animateIn="animate__fadeIn"
            animateOnce
          >
            <Flex direction="column" flex="1" h="100%">
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
                <AnimationOnScroll
                  animateIn="animate__fadeIn"
                  style={{ flex: 1 }}
                  delay={200}
                  animateOnce
                >
                  <SteamButton
                    url={gameIsAvailableOnSteam?.url}
                    disabled={!gameIsAvailableOnSteam}
                  />
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__fadeIn"
                  style={{ flex: 1 }}
                  delay={300}
                  animateOnce
                >
                  <EpicGamesButton
                    url={gameIsAvailableOnEpicGames?.url}
                    disabled={!gameIsAvailableOnEpicGames}
                  />
                </AnimationOnScroll>
              </Flex>
            </Flex>
          </AnimationOnScroll>
        </AnimationOnScroll>
      </Flex>
    </>
  );
}
