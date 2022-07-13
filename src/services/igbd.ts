import axios from 'axios';
import { igbdApi } from './api';
import { getIGBDToken, storeToken } from './supabase';

interface IGBDToken {
  access_token: string;
}

interface IGBDGame {
  id: number;
  name: string;
}

interface IGBDVideo {
  name: string;
  video_id: string;
}

const clientID = process.env.IGBD_CLIENT_ID;

export async function generateToken() {
  const client_id = process.env.IGBD_CLIENT_ID;
  const client_secret = process.env.IGBD_CLIENT_SECRET;

  const { data } = await axios.post<IGBDToken>(
    'https://id.twitch.tv/oauth2/token',
    null,
    {
      params: { client_id, client_secret, grant_type: 'client_credentials' },
    },
  );

  const token = data.access_token;

  await storeToken(token);

  return token;
}

export async function getGameVideos(
  gameName: string,
  tried = 0,
): Promise<IGBDVideo[]> {
  if (tried === 3) {
    return [];
  }

  try {
    const igbdToken = await getIGBDToken();

    const headers = {
      headers: { Authorization: igbdToken, 'Client-ID': String(clientID) },
    };

    const gameQuery = `\
    search "${gameName}";
    fields name;
    `;

    const { data: games } = await igbdApi.post<IGBDGame[]>(
      '/games',
      gameQuery,
      headers,
    );

    if (games.length === 0) {
      return [];
    }

    const { id } = games.find((game) => game.name === gameName) || games[0];

    const gameVideoQuery = `\
  where game = (${id});
  fields name,video_id;
  `;

    const { data: videos } = await igbdApi.post<IGBDVideo[]>(
      '/game_videos',
      gameVideoQuery,
      headers,
    );

    return videos || [];
  } catch {
    await generateToken();
    return getGameVideos(gameName, tried + 1);
  }
}
