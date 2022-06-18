import { HStack, StackProps, useColorModeValue } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { GameCard } from 'components/GameCard';
import { PreviewGameType } from 'services/rawg';

import styles from './styles.module.css';

interface ListScrollerProps {
  hideScrollbars?: boolean;
  listStyle?: StackProps;
  data: PreviewGameType[];
}

export function ListScroller({
  data,
  listStyle,
  hideScrollbars = false,
}: ListScrollerProps) {
  const scrollStyle = useColorModeValue(
    { background: '#ffffff', color: '#121212' },
    { background: '#121212', color: '#ffffff' },
  );

  return (
    <ScrollContainer
      innerRef={(ref) => {
        if (ref) {
          ref.tabIndex = -1;
        }
      }}
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
      <HStack py="4" mx="2" spacing={4} {...listStyle}>
        {data.map((game) => (
          <GameCard key={game.slug} {...game} />
        ))}
      </HStack>
    </ScrollContainer>
  );
}
