import produce from 'immer';
import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { CoinsListState, PriceHistoryList } from '../Coin';

interface PortfolioState {
  loading: boolean;
  coins: CoinsListState;
  order: string[];
  favorites: string[];
  favoriteHistory: PriceHistoryList;
  preferredCurrency: string;
}

const initialState: PortfolioState = {
  loading: false,
  coins: {},
  order: [],
  favorites: [],
  favoriteHistory: [],
  preferredCurrency: 'usd',
};

const reducer = produce(
  (state: PortfolioState = initialState, action: Action): PortfolioState => {
    switch (action.type) {
      case ActionType.GET_PORTFOLIO:
        state = {
          loading: false,
          coins: action.payload.coins,
          order: action.payload.order,
          favorites: action.payload.favorites,
          favoriteHistory: action.payload.favoriteHistory,
          preferredCurrency: action.payload.preferredCurrency,
        };
        return state;

      case ActionType.DELETE_PORTFOLIO_COIN:
        delete state.coins[action.payload];
        state.order = state.order.filter((id) => id !== action.payload);
        state.favorites = state.order.slice(0, 3);
        return state;

      case ActionType.SET_PORTFOLIO_LOADING:
        state = {
          ...state,
          loading: true,
        };
        return state;

      default:
        return state;
    }
  },
);

export default reducer;
