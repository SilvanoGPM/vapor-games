import { GetStaticProps } from 'next';
import { HomeTemplate, HomeTemplateProps } from 'templates/HomeTemplate';
import * as rawg from 'services/rawg';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const game = await rawg.getRandomGame();

  const size = 10;

  const actionGenresRaw = await rawg.getGamesByGenres(['action'], size);
  const adventureGenresRaw = await rawg.getGamesByGenres(['adventure'], size);
  const indieGenresRaw = await rawg.getGamesByGenres(['indie'], size);

  const rpgGenresRaw = await rawg.getGamesByGenres(
    ['role-playing-games-rpg'],
    size,
  );

  const shooterGenresRaw = await rawg.getGamesByGenres(['shooter'], size);
  const puzzleGenresRaw = await rawg.getGamesByGenres(['puzzle'], size);
  const sportsGenresRaw = await rawg.getGamesByGenres(['sports'], size);
  const platformerGenresRaw = await rawg.getGamesByGenres(['platformer'], size);
  const strategyGenresRaw = await rawg.getGamesByGenres(['strategy'], size);
  const fightingGenresRaw = await rawg.getGamesByGenres(['fighting'], size);

  const hero = rawg.convertGameRawToGame(game);

  const genres = {
    action: actionGenresRaw.map(rawg.convertGameRawToGame),
    adventure: adventureGenresRaw.map(rawg.convertGameRawToGame),
    indie: indieGenresRaw.map(rawg.convertGameRawToGame),
    'role-playing-games-rpg': rpgGenresRaw.map(rawg.convertGameRawToGame),
    shooter: shooterGenresRaw.map(rawg.convertGameRawToGame),
    puzzle: puzzleGenresRaw.map(rawg.convertGameRawToGame),
    sports: sportsGenresRaw.map(rawg.convertGameRawToGame),
    platformer: platformerGenresRaw.map(rawg.convertGameRawToGame),
    strategy: strategyGenresRaw.map(rawg.convertGameRawToGame),
    fighting: fightingGenresRaw.map(rawg.convertGameRawToGame),
  };

  return { props: { hero, genres } };
};
