import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Spacer,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollContainer from 'react-indiana-drag-scroll';

import { GameType } from 'services/rawg';
import { Title } from 'components/Title';

import { SteamButton } from './SteamButton';
import { EpicGamesButton } from './EpicGamesButton';

type OverviewProps = {
  game: GameType;
};

const STEAM_ID = 1;
const EPIC_GAMES_ID = 11;

const fallbackImage = '/assets/game-fallback.png';

export function Overview({ game }: OverviewProps) {
  const descriptionMaxWidth = useBreakpointValue({ base: '100%', lg: '50%' });

  const [showMoreDescription, setShowMoreDescription] = useState(false);

  function toggleShowMore() {
    setShowMoreDescription(!showMoreDescription);
  }

  const gameIsAvailableOnSteam = game.stores.find(
    ({ store_id }) => store_id === STEAM_ID,
  );

  const gameIsAvailableOnEpicGames = game.stores.find(
    ({ store_id }) => store_id === EPIC_GAMES_ID,
  );

  return (
    <>
      <Title flex="1" as="h3" mb="4">
        Overview
      </Title>

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
            maxWidth: descriptionMaxWidth,
            width: '100%',
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
              <Box>
                <ScrollContainer
                  innerRef={(ref) => {
                    if (ref) {
                      ref.tabIndex = -1;
                    }
                  }}
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    overflow: showMoreDescription ? 'auto' : 'hidden',
                  }}
                  vertical={showMoreDescription}
                  hideScrollbars={!showMoreDescription}
                >
                  <Text
                    fontSize="xl"
                    flex="1"
                    tabIndex={-1}
                    wordBreak="break-word"
                  >
                    {game.description_raw || 'No description.'}
                  </Text>
                </ScrollContainer>

                <Flex mt={4}>
                  <Button
                    flex="1"
                    leftIcon={
                      <Icon
                        as={
                          showMoreDescription ? AiFillEyeInvisible : AiFillEye
                        }
                      />
                    }
                    textTransform="uppercase"
                    onClick={toggleShowMore}
                    _focus={{ outline: 'none' }}
                    _focusVisible={{
                      outline: 'none',
                      ringColor: 'white',
                      ring: 1,
                      ringOffsetColor: 'white',
                      ringOffset: '0.1rem',
                    }}
                    _hover={{
                      outline: 'none',
                      ringColor: 'white',
                      ring: 1,
                      ringOffsetColor: 'white',
                      ringOffset: '0.1rem',
                    }}
                  >
                    {showMoreDescription ? 'Hide' : 'See more'}
                  </Button>
                </Flex>
              </Box>

              <Divider my={4} />

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
