import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  HStack,
  StackProps,
} from '@chakra-ui/react';

import ScrollContainer from 'react-indiana-drag-scroll';

import { GameCard } from 'components/GameCard';

import { PreviewGameType } from 'services/rawg';

type GameListProps = {
  header?: React.ReactNode;
  data: PreviewGameType[];
  headerStyle?: FlexProps;
  containerStyle?: BoxProps;
  listStyle?: StackProps;
};

export function GameList({
  header,
  headerStyle,
  data,
  containerStyle,
  listStyle,
}: GameListProps) {
  return (
    <Box w="100%" mb={50} {...containerStyle}>
      {header && (
        <Flex
          mb={2}
          px={2}
          justify="space-between"
          align="center"
          {...headerStyle}
        >
          {header}
        </Flex>
      )}

      <HStack
        spacing={8}
        overflow="auto"
        py={4}
        px={2}
        as={ScrollContainer}
        {...listStyle}
      >
        {data.map((game) => (
          <GameCard
            key={game.slug}
            fallbackImage="/fallback_game_image.png"
            {...game}
          />
        ))}
      </HStack>
    </Box>
  );
}
