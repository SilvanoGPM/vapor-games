import { Header } from 'components/Header';

import { GameType } from 'services/rawg';
import { GameHero } from './components/Hero';

export type GameTemplateProps = {
  game: GameType;
};

export function GameTemplate({ game }: GameTemplateProps) {
  return (
    <>
      <Header />

      <GameHero {...game} />
    </>
  );
}
