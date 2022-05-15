import { GetStaticProps } from 'next';
import { HomeTemplate, HomeTemplateProps } from 'templates/HomeTemplate';
import * as rawg from 'services/rawg';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const game = await rawg.getRandomGame();

  const publisher = game.publishers ? game.publishers[0] : game.publisher;

  const hero: rawg.GameType = {
    id: game.id,
    title: game.name,
    slug: game.slug,
    description: game.description || '',
    bgImage: game.background_image,
    rating: game.rating,
    publisher: { name: publisher?.name || '', slug: publisher?.slug || '' },
    genres: game.genres
      .filter(({ language }) => language === 'eng')
      .map(({ name }) => name),
  };

  return { props: { hero } };
};
