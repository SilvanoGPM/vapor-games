import { NextApiRequest, NextApiResponse } from 'next';

import * as rawg from 'services/rawg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { game } = req.query as { game: string };

  try {
    const games = await rawg.searchGames(game);
    res.send(games);
  } catch {
    res.status(404).send({});
  }
}
