import produce from 'immer';
import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { CoinResult } from '../Coin';

interface SearchState {
  loading: boolean;
  results: CoinResult[];
  failed: boolean;
  term: string;
}

const initialState: SearchState = {
  loading: false,
  results: [],
  failed: false,
  term: '',
};

const reducer = produce(
  (state: SearchState = initialState, action: Action): SearchState => {
    switch (action.type) {
      case ActionType.SET_SEARCH_LOADING:
        state = {
          loading: true,
          results: [],
          failed: false,
          term: '',
        };
        return state;
      case ActionType.SET_SEARCH_FAILED:
        state = {
          loading: false,
          results: [],
          failed: true,
          term: action.payload,
        };
        return state;
      case ActionType.SEARCH_COINS:
        state = {
          loading: false,
          results: action.payload.results,
          failed: false,
          term: action.payload.term,
        };
        return state;
      case ActionType.CLEAR_SEARCH:
        state = initialState;
        return state;
      default:
        return state;
    }
  },
);

export default reducer;
