import { GameType } from 'services/rawg';

export const fakeHero: GameType = {
  id: 1,
  name: 'God of War',
  slug: 'god-of-war-2',
  metacritc: 94,
  rating: 4.6,
  publishers: [{ slug: 'sony', name: 'Sony Interactive Entertainment' }],
  genres: [
    { slug: 'action', name: 'Action' },
    { slug: 'adventure', name: 'Adventure' },
  ],
  released: '',
  updated: '',
  description_raw: '',
  background_image_additional: '',
  screenshots: [],
  series: [],
  stores: [],
  website: '',
  background_image:
    'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
  developers: [{ slug: 'sony', name: 'Sony Interactive Developers' }],
  parent_platforms: [{ platform: { slug: 'pc', name: 'pc' } }],
};
