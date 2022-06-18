import { GenreType, PublisherType } from 'services/rawg';

import { HeroBackground } from './HeroBackground';
import { HeroDetails } from './HeroDetails';
import { HeroTitle } from './HeroTitle';
import { HeroPublisher } from './HeroPublisher';
import { HeroScores } from './HeroScores';
import { HeroGenres } from './HeroGenres';

export type HeroProps = {
  name: string;
  slug: string;
  publishers: PublisherType[];
  background_image: string | null;
  genres: GenreType[];
  rating: number;
  metacritic?: number | null;
};

export const Hero = {
  Background: HeroBackground,
  Details: HeroDetails,
  Title: HeroTitle,
  Publisher: HeroPublisher,
  Scores: HeroScores,
  Genres: HeroGenres,
};
