import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCoinDetails = (ids: string, vs_currency: string) => {
  return api.get('/coins/markets', {
    params: {
      ids,
      vs_currency,
    },
  });
};

// Come back and change numDays type to an ENUM with specific days
export const getCoinHistory = (id: string, vs_currency: string, numDays: string) => {
  return api.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency,
      days: numDays,
    },
  });
};
