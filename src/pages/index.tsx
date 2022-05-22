import { GetStaticProps } from 'next';

import { HomeTemplate, HomeTemplateProps } from 'templates/HomeTemplate';
import * as rawg from 'services/rawg';

const isDev = process.env.NODE_ENV === 'development';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

async function getGenres() {
  if (isDev) {
    const { actionGames } = await import('dev/fakeActionGames');

    return {
      action: actionGames.results,
    };
  }

  const size = 10;

  return {
    action: await rawg.getGamesByGenres(['action'], size),
    adventure: await rawg.getGamesByGenres(['adventure'], size),
    indie: await rawg.getGamesByGenres(['indie'], size),
    'role-playing-games-rpg': await rawg.getGamesByGenres(
      ['role-playing-games-rpg'],
      size,
    ),
    shooter: await rawg.getGamesByGenres(['shooter'], size),
    puzzle: await rawg.getGamesByGenres(['puzzle'], size),
    sports: await rawg.getGamesByGenres(['sports'], size),
    platformer: await rawg.getGamesByGenres(['platformer'], size),
    strategy: await rawg.getGamesByGenres(['strategy'], size),
    fighting: await rawg.getGamesByGenres(['fighting'], size),
  };
}

async function getHero(): Promise<rawg.GameType> {
  if (isDev) {
    const background_image =
      'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg';

    return {
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
      background_image,
    };
  }

  return rawg.getRandomGame();
}

export const getStaticProps: GetStaticProps = async () => {
  const hero = await getHero();

  const genres = await getGenres();

  return {
    props: {
      hero,
      genres,
    },
    revalidate: 60 * 60 * 24,
  };
};
