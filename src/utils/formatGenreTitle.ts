import { GenresType } from 'components/GenreList';
import { titleString } from './titleString';

export function formatGenreTitle(genre: GenresType) {
  if (genre === 'role-playing-games-rpg') {
    return 'RPG';
  }

  return titleString(genre).replace('-', ' ');
}
