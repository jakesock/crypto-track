import produce from 'immer';
import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { CoinsListState, CoinHistoryList } from '../Coin';

interface PortfolioState {
  loading: boolean;
  coins: CoinsListState;
  order: string[];
  favorites: string[];
  favoriteHistory: CoinHistoryList;
}

const initialState: PortfolioState = {
  loading: false,
  coins: {},
  order: [],
  favorites: [],
  favoriteHistory: [],
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
        };
        return state;

      case ActionType.DELETE_PORTFOLIO_COIN:
        delete state.coins[action.payload.id];
        state.order = action.payload.order;
        state.favorites = action.payload.favorites;
        state.favoriteHistory = action.payload.favoriteHistory;
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
