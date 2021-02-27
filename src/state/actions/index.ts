import { ActionType } from '../actionTypes';
import {
  Coin,
  CoinHistoryLabels,
  CoinsListState,
  PriceHistoryList,
  SearchResult,
} from '../Coin';

// Portfolio Actions
export interface SetPortfolioLoadingAction {
  type: ActionType.SET_PORTFOLIO_LOADING;
}

export interface GetPortfolioAction {
  type: ActionType.GET_PORTFOLIO;
  payload: {
    coins: CoinsListState;
    order: string[];
    favorites: string[];
    favoriteHistory: PriceHistoryList;
    preferredCurrency: string;
  };
}

export interface DeletePortfolioCoinAction {
  type: ActionType.DELETE_PORTFOLIO_COIN;
  payload: string;
}

// Single Coin Actions
export interface SetCoinLoadingAction {
  type: ActionType.SET_COIN_LOADING;
}

export interface GetCoinAction {
  type: ActionType.GET_COIN;
  payload: {
    detail: Coin;
    priceHistory: PriceHistoryList;
    label: CoinHistoryLabels;
  };
}

// Search Actions
export interface SearchCoinsAction {
  type: ActionType.SEARCH_COINS;
  payload: { results: SearchResult; term: string };
}

export interface SetSearchLoadingAction {
  type: ActionType.SET_SEARCH_LOADING;
}

export interface SetSearchFailedAction {
  type: ActionType.SET_SEARCH_FAILED;
  payload: string;
}

// Preferences Actions
export interface Currency {
  symbol: string;
  nameLower: string;
  nameUpper: string;
}
export interface GetPreferencesAction {
  type: ActionType.GET_PREFERENCES;
  payload: {
    isDarkTheme: boolean;
    currency: Currency;
  };
}

export interface SetThemeAction {
  type: ActionType.SET_THEME;
  payload: boolean;
}

export interface SetCurrencyAction {
  type: ActionType.SET_CURRENCY;
  payload: Currency;
}

export type Action =
  | SetPortfolioLoadingAction
  | GetPortfolioAction
  | DeletePortfolioCoinAction
  | SetCoinLoadingAction
  | GetCoinAction
  | SearchCoinsAction
  | SetSearchLoadingAction
  | SetSearchFailedAction
  | GetPreferencesAction
  | SetThemeAction
  | SetCurrencyAction;
