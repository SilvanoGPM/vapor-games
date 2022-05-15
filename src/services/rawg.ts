import { GenresType } from 'components/GenreList';
import { api } from 'libs/api';
import { chooseRandom } from 'utils/chooseRandom';

export type PublisherType = { name: string; slug: string };

export type GenreType = { name: string; slug: GenresType };

export type PreviewGameType = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  metacritc: number | null;
  genres: GenreType[];
};

export type GameType = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  metacritic: number | null;
  genres: GenreType[];
  publishers: PublisherType[];
  requirements: {
    minimum: string;
    recommended: string;
  };
  released: string;
  updated: string;
  series: PreviewGameType[];
};

const key = process.env.API_KEY;

export async function getGameBySlug(slug: string): Promise<GameType> {
  const { data: game } = await api.get<GameType>(`/games/${slug}?key=${key}`);

  const { data: series } = await api.get<{ results: PreviewGameType[] }>(
    `/games/${slug}/game-series?key=${key}`,
  );

  return { ...game, series: series.results };
}

export async function getRandomGame() {
  const ordering = chooseRandom(['rating', 'metacritic', 'added', '']);

  const { data } = await api.get<{ results: PreviewGameType[] }>(
    `/games?key=${key}&page_size=100&ordering=${
      ordering ? '-' : ''
    }${ordering}`,
  );

  const game = chooseRandom(data.results);

  return getGameBySlug(game.slug);
}

export async function getGamesByGenres(genres: GenresType[], size = 10) {
  const { data } = await api.get<{ results: PreviewGameType[] }>(
    `/games?key=${key}&genres=${genres.join(',')}&page_size=${size}`,
  );

  return data.results;
}

export async function getMostPopularGames(size = 10) {
  const { data } = await api.get<{ results: PreviewGameType[] }>(
    `/games?key=${key}&page_size=${size}&ordering=-added`,
  );

  return data.results;
}
