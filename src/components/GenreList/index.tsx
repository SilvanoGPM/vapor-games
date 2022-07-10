import { PreviewGameType } from 'services/rawg';
import { GameList } from 'components/GameList';

import { ListHeader } from './ListHeader';

export type GenresType =
  | 'action'
  | 'adventure'
  | 'indie'
  | 'shooter'
  | 'puzzle'
  | 'sports'
  | 'platformer'
  | 'strategy'
  | 'fighting'
  | 'role-playing-games-rpg'
  | 'simulation'
  | 'arcade';

type GenreListProps = {
  title: string;
  genre: GenresType;
  data: PreviewGameType[];
};

export function GenreList({ title, genre, data }: GenreListProps) {
  return (
    <div data-scroll={genre}>
      <GameList
        data={data}
        header={<ListHeader title={title} genre={genre} />}
      />
    </div>
  );
}
