import { GetStaticProps } from 'next';
import { HomeTemplate, HomeTemplateProps } from 'templates/HomeTemplate';
import * as rawg from 'services/rawg';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

async function getGenres() {
  const isDev = process.env.NODE_ENV === 'development';

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

export const getStaticProps: GetStaticProps = async () => {
  const hero = await rawg.getRandomGame();

  const genres = await getGenres();

  return {
    props: {
      hero,
      genres,
    },
  };
};
