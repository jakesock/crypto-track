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

export interface CoinHistory {
  price: PriceHistoryList;
  label: CoinHistoryLabels;
}

export type PriceHistoryList = PriceHistoryData[];
export type PriceHistoryData = [number, number];

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

export type SearchResult = CoinResult[];

export interface CoinResult {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number | null;
  thumb: string;
  large: string;
}
