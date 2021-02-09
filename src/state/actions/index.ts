import { ActionType } from '../actionTypes';
import { CoinsListState } from '../Coin';

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

export interface DeleteCoinAction {
  type: ActionType.DELETE_COIN;
  payload: string;
}

export type Action =
  | SetPortfolioLoadingAction
  | GetPortfolioAction
  | DeleteCoinAction;
