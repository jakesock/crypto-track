// Coin Types
export interface CoinsListState {
  [key: string]: Coin;
}

export interface CoinDetail {
  detail: Coin;
  history: CoinHistory;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: Roi | null;
  last_updated: string;
}

interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

// Coin History Types
export type CoinHistory = {
  price: CoinHistoryList;
  label: CoinHistoryLabels;
};

export type CoinHistoryList = CoinHistoryData[];
export type CoinHistoryData = [number, number];

export type CoinHistoryAPIResponse = {
  [key: string]: CoinHistoryList;
};

export enum CoinHistoryTimeFrames {
  day = '1',
  week = '7',
  twoWeeks = '14',
  month = '30',
  sixMonths = '180',
  year = '365',
}

export enum CoinHistoryLabels {
  day = 'Day',
  week = 'Week',
  twoWeeks = 'Two Weeks',
  month = 'Month',
  sixMonths = 'Six Months',
  year = 'Year',
}

export function getCoinHistoryLabel(
  timeFrame: CoinHistoryTimeFrames,
): CoinHistoryLabels {
  switch (timeFrame) {
    case CoinHistoryTimeFrames.day:
      return CoinHistoryLabels.day;
    case CoinHistoryTimeFrames.week:
      return CoinHistoryLabels.week;
    case CoinHistoryTimeFrames.twoWeeks:
      return CoinHistoryLabels.twoWeeks;
    case CoinHistoryTimeFrames.month:
      return CoinHistoryLabels.month;
    case CoinHistoryTimeFrames.sixMonths:
      return CoinHistoryLabels.sixMonths;
    case CoinHistoryTimeFrames.year:
      return CoinHistoryLabels.year;
  }
}

// Search Result Types (CoinGecko API)
export type APISearchResults = {
  coins: CoinResult[];
  exchanges: ExchangeResult[];
  icos: IcosResult;
};

export interface SearchResult {
  id: string;
  name: string;
  thumb: string;
  large: string;
}

export interface CoinResult extends SearchResult {
  symbol: string;
  market_cap_rank: number | null;
}

export interface ExchangeResult extends SearchResult {
  market_type: string;
}

export type IcosResult = [];

// Trending Result Types (CoinGecko API)

export type APITrendingResults = {
  coins: TrendingCoinResult[];
  exchanges: TrendingExchangeResult[] | never[];
};

export interface TrendingCoinResult extends CoinResult {
  score: number;
}

export interface TrendingExchangeResult extends ExchangeResult {
  score: number;
}
