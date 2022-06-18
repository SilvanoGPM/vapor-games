import { GenresType } from 'components/GenreList';

const gameDateFormatter = new Intl.DateTimeFormat('en', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export function titleString(str: string) {
  const firstletter = str[0];

  const rest = str.slice(1);

  return `${firstletter.toUpperCase()}${rest}`;
}

export function formatGameDate(date: Date) {
  return gameDateFormatter.format(date);
}

export function formatGameStrDate(date: string) {
  return formatGameDate(new Date(date));
}

export function formatGenreTitle(genre: GenresType) {
  if (genre === 'role-playing-games-rpg') {
    return 'RPG';
  }

  return titleString(genre).replace('-', ' ');
}
