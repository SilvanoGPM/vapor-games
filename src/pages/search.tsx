import { useRouter } from 'next/router';
import { SearchTemplate } from 'templates/SearchTemplate';

export default function Search() {
  const router = useRouter();

  const { genre } = router.query as { genre: string };

  return <SearchTemplate genre={genre} />;
}
