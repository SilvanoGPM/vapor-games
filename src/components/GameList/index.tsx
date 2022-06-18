import { ReactNode } from 'react';

import { Box, BoxProps, FlexProps, StackProps } from '@chakra-ui/react';

import { PreviewGameType } from 'services/rawg';

import { ListHeader } from './ListHeader';
import { ListScroller } from './ListScroller';

type GameListProps = {
  header?: ReactNode;
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
  return (
    <Box w="100%" mb={50} {...containerStyle}>
      <ListHeader header={header} headerStyle={headerStyle} />

      <ListScroller
        data={data}
        listStyle={listStyle}
        hideScrollbars={hideScrollbars}
      />
    </Box>
  );
}
