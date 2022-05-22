import { GenresType } from 'components/GenreList';
import { api } from 'libs/api';
import { chooseRandom } from 'utils/chooseRandom';

export type PublisherType = { name: string; slug: string };

export type GenreType = { name: string; slug: GenresType };

export type ScreenshotType = {
  id: number;
  image: string;
  height: number;
  width: number;
};

export type StoreType = {
  store_id: number;
  url: string;
};

export type PreviewGameType = {
  id: number;
  name: string;
  slug: string;
  background_image: string | null;
  rating: number;
  metacritc: number | null;
  genres: GenreType[];
};

export type GameType = {
  description_raw: string | null;
  background_image_additional: string | null;
  publishers: PublisherType[];
  released: string;
  updated: string;
  series: PreviewGameType[];
  screenshots: ScreenshotType[];
  stores: StoreType[];
  website: string;
} & PreviewGameType;

type GameAdditionalInfoType = 'game-series' | 'screenshots' | 'stores';

const key = process.env.API_KEY;

export async function searchGames(search: string) {
  const { data } = await api.get<{ results: PreviewGameType[] }>(
    `/games?key=${key}&search=${search}`,
  );

  return data.results;
}

export async function getGameAdditionalInfo<T>(
  type: GameAdditionalInfoType,
  slug: string,
) {
  try {
    const { data } = await api.get<{ results: T[] }>(
      `/games/${slug}/${type}?key=${key}`,
    );

    return data.results || [];
  } catch {
    return [];
  }
}

export async function getGameBySlug(slug: string): Promise<GameType> {
  const { data: game } = await api.get<GameType>(`/games/${slug}?key=${key}`);

  const series = await getGameAdditionalInfo<PreviewGameType>(
    'game-series',
    slug,
  );

  const screenshots = await getGameAdditionalInfo<ScreenshotType>(
    'screenshots',
    slug,
  );

  const stores = await getGameAdditionalInfo<StoreType>('stores', slug);

  return {
    ...game,
    series,
    screenshots,
    stores,
  };
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
