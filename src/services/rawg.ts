import { GenresType } from 'components/GenreList';
import { api } from 'libs/api';
import { chooseRandom } from 'utils/chooseRandom';

export type PublisherType = { name: string; slug: string };

export type GenreType = { name: string; slug: GenresType };

export type GameRawType = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  metacritic: number;
  genres: GenreType[];
  publishers: PublisherType[] | null;
};

export type GameType = {
  id: number;
  title: string;
  slug: string;
  bgImage: string;
  rating: number;
  metacritic: number | null;
  genres: GenreType[];
  publisher: PublisherType | null;
};

const key = process.env.API_KEY;

export function convertGameRawToGame(raw: GameRawType) {
  const publisher = raw.publishers ? raw.publishers[0] : null;

  const game: GameType = {
    id: raw.id,
    title: raw.name,
    slug: raw.slug,
    bgImage: raw.background_image,
    rating: raw.rating,
    genres: raw.genres,
    metacritic: raw.metacritic,
    publisher,
  };

  return game;
}

export async function getGameBySlug(slug: string) {
  const { data } = await api.get<GameRawType>(`/games/${slug}?key=${key}`);

  return convertGameRawToGame(data);
}

export async function getRandomGame() {
  const ordering = chooseRandom(['rating', 'metacritic', 'added', '']);

  const { data } = await api.get(
    `/games?key=${key}&page_size=100&ordering=${
      ordering ? '-' : ''
    }${ordering}`,
  );

  const game = convertGameRawToGame(chooseRandom<GameRawType>(data.results));

  const foundGame = await getGameBySlug(game.slug);

  return { ...foundGame };
}

export async function getGamesByGenres(genres: GenresType[], size = 10) {
  const { data } = await api.get<{ results: GameRawType[] }>(
    `/games?key=${key}&genres=${genres.join(',')}&page_size=${size}`,
  );

  return data.results.map(convertGameRawToGame);
}

export async function getMostPopularGames(size = 10) {
  const { data } = await api.get<{ results: GameRawType[] }>(
    `/games?key=${key}&page_size=${size}&ordering=-added`,
  );

  return data.results.map(convertGameRawToGame);
}
