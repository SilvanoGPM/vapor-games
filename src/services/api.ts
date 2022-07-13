import axios from 'axios';

export const rawgApi = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export const igbdApi = axios.create({
  baseURL: 'https://api.igdb.com/v4',
});
