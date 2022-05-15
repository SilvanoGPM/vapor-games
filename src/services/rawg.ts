import { GenresType } from 'components/GenreList';
import { api } from 'libs/api';
import { chooseRandom } from 'utils/chooseRandom';

export type PublisherType = { name: string; slug: string };

export type GenrerType = { name: string; slug: GenresType };

export type GameRawType = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  background_image: string;
  rating: number;
  metacritic?: number;
  genres: GenrerType[];
  publisher?: PublisherType;
  publishers?: PublisherType[];
};

export type GameType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  bgImage: string;
  rating: number;
  metacritic?: number;
  genres: GenrerType[];
  publisher: PublisherType;
};

const key = process.env.API_KEY;

export function convertGameRawToGame(raw: GameRawType) {
  const publisher = raw.publishers ? raw.publishers[0] : raw.publisher;

  const game: GameType = {
    id: raw.id,
    title: raw.name,
    slug: raw.slug,
    description: raw.description || '',
    bgImage: raw.background_image,
    rating: raw.rating,
    publisher: { name: publisher?.name || '', slug: publisher?.slug || '' },
    genres: raw.genres,
    metacritic: raw.metacritic,
  };

  return game;
}

export async function getRandomGame() {
  const ordering = chooseRandom(['rating', 'metacritic', 'added', '']);

  const { data } = await api.get(
    `/games?key=${key}&page_size=100&ordering=${
      ordering ? '-' : ''
    }${ordering}`,
  );

  const choosedGame = chooseRandom<GameRawType>(data.results);

  return choosedGame;
}

export async function getGamesByGenres(genres: GenresType[], size = 10) {
  const { data } = await api.get<{ results: GameRawType[] }>(
    `/games?key=${key}&genres=${genres.join(',')}&page_size=${size}`,
  );

  return data.results;
}
