import { ActionType } from '../actionTypes';
import { Coin, CoinHistoryLabels, CoinsListState, PriceHistoryList } from '../Coin';

// Portfolio Actions
export interface SetPortfolioLoadingAction {
  type: ActionType.SET_PORTFOLIO_LOADING;
}

export interface GetPortfolioAction {
  type: ActionType.GET_PORTFOLIO;
  payload: {
    preferredCurrency: string;
    favorites: string[];
    coins: CoinsListState;
    order: string[];
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

export type Action =
  | SetPortfolioLoadingAction
  | GetPortfolioAction
  | DeletePortfolioCoinAction
  | SetCoinLoadingAction
  | GetCoinAction;
