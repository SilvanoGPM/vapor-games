import { GetStaticProps } from 'next';
import { HomeTemplate, HomeTemplateProps } from 'templates/HomeTemplate';
import * as rawg from 'services/rawg';
import { actionGames } from 'components/GenreList/fakeActionGames';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const hero = await rawg.getRandomGame();

  // const size = 10;

  // const genres = {
  //   action: await rawg.getGamesByGenres(['action'], size),
  //   adventure: await rawg.getGamesByGenres(['adventure'], size),
  //   indie: await rawg.getGamesByGenres(['indie'], size),
  //   'role-playing-games-rpg': await rawg.getGamesByGenres(
  //     ['role-playing-games-rpg'],
  //     size,
  //   ),
  //   shooter: await rawg.getGamesByGenres(['shooter'], size),
  //   puzzle: await rawg.getGamesByGenres(['puzzle'], size),
  //   sports: await rawg.getGamesByGenres(['sports'], size),
  //   platformer: await rawg.getGamesByGenres(['platformer'], size),
  //   strategy: await rawg.getGamesByGenres(['strategy'], size),
  //   fighting: await rawg.getGamesByGenres(['fighting'], size),
  // };

  const genres = {
    action: actionGames.results,
  };

  return {
    props: {
      hero,
      genres,
    },
  };
};
