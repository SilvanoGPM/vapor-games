import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Fallback } from 'components/Fallback';
import * as rawg from 'services/rawg';
import * as igbd from 'services/igbd';
import { GameTemplate, GameTemplateProps } from 'templates/GameTemplate';

export default function Game(props: GameTemplateProps) {
  const router = useRouter();

  if (router.isFallback || !props) {
    return <Fallback />;
  }

  return <GameTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string) || '';

  try {
    const game = await rawg.getGameBySlug(slug);

    const videos = await igbd.getGameVideos(game.name);

    return { props: { game, videos } };
  } catch (error) {
    console.log(`error on game: ${slug}`, error);
  }

  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const games = await rawg.getMostPopularGames(10);

  const paths = games.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: true };
};
