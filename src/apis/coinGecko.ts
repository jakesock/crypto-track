import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCoinsMarkets = (ids: string, vs_currency: string) =>
  api.get('/coins/markets', {
    params: {
      ids,
      vs_currency,
    },
  });
