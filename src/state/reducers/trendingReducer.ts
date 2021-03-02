import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { TrendingCoin } from '../Coin';

interface TrendingState {
  loading: boolean;
  results: TrendingCoin[];
}

const initialState: TrendingState = {
  loading: false,
  results: [],
};

const reducer = (
  state: TrendingState = initialState,
  action: Action,
): TrendingState => {
  switch (action.type) {
    case ActionType.SET_TRENDING_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_TRENDING:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
