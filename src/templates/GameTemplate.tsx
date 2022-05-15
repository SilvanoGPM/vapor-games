import { Heading } from '@chakra-ui/react';

import { GameType } from 'services/rawg';

export type GameTemplateProps = {
  game: GameType;
};

export function GameTemplate({ game }: GameTemplateProps) {
  return <Heading>{game.name}</Heading>;
}
