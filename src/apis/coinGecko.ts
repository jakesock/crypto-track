import axios, { AxiosResponse } from 'axios';
import {
  Coin,
  CoinHistoryTimeFrames,
  CoinHistoryAPIResponse,
  APISearchResults,
} from '../state';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCoinDetails = (
  ids: string,
  vs_currency: string,
): Promise<AxiosResponse<Coin[]>> => {
  return api.get('/coins/markets', {
    params: {
      ids,
      vs_currency,
    },
  });
};

// Come back and change currency type to an enum with specific currency choices
export const getCoinHistory = (
  id: string,
  vs_currency: string,
  numDays: CoinHistoryTimeFrames,
): Promise<AxiosResponse<CoinHistoryAPIResponse>> => {
  return api.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency,
      days: numDays,
    },
  });
};

export const searchCoins = (
  term: string,
): Promise<AxiosResponse<APISearchResults>> => {
  return api.get('/search', {
    params: {
      query: term,
    },
  });
};
