import { api } from 'libs/api';
import { chooseRandom } from 'utils/chooseRandom';

export type PublisherType = { name: string; slug: string };

export type GenrerType = { name: string; slug: string };

export type GameTypeRaw = {
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

export async function getRandomGame() {
  const ordering = chooseRandom(['name', 'rating', 'metacritic', '']);

  const isReverse = chooseRandom([true, false]);

  const { data } = await api.get(
    `/games?key=${key}&page_size=100&ordering=${
      isReverse && ordering ? '-' : ''
    }${ordering}`,
  );

  const choosedGame = chooseRandom<GameTypeRaw>(data.results);

  return choosedGame;
}
