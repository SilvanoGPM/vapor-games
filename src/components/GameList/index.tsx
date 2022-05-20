import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  HStack,
  StackProps,
  useColorModeValue,
} from '@chakra-ui/react';

import { GameCard } from 'components/GameCard';
import { CSSProperties } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { PreviewGameType } from 'services/rawg';

import styles from './styles.module.css';

type GameListProps = {
  header?: React.ReactNode;
  data: PreviewGameType[];
  headerStyle?: FlexProps;
  containerStyle?: BoxProps;
  listStyle?: StackProps;
  hideScrollbars?: boolean;
};

export function GameList({
  header,
  headerStyle,
  data,
  containerStyle,
  listStyle,
  hideScrollbars = true,
}: GameListProps) {
  const scrollStyle = useColorModeValue(
    { background: '#ffffff', color: '#121212' },
    { background: '#121212', color: '#ffffff' },
  );

  return (
    <Box w="100%" mb={50} {...containerStyle}>
      {header && (
        <Flex mb={2} justify="space-between" align="center" {...headerStyle}>
          {header}
        </Flex>
      )}

      <ScrollContainer
        style={
          {
            width: '100%',
            '--scroll-color': scrollStyle.color,
            '--scroll-background': scrollStyle.background,
          } as CSSProperties
        }
        className={styles.gameList}
        hideScrollbars={hideScrollbars}
      >
        <HStack spacing={4} py={4} {...listStyle}>
          {data.map((game) => (
            <GameCard key={game.slug} {...game} />
          ))}
        </HStack>
      </ScrollContainer>
    </Box>
  );
}
