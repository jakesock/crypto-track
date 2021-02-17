import produce from 'immer';
import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { SearchResult } from '../Coin';

interface SearchState {
  loading: boolean;
  results: SearchResult;
  failed: boolean;
}

const initialState: SearchState = {
  loading: false,
  results: [],
  failed: false,
};

const reducer = produce(
  (state: SearchState = initialState, action: Action): SearchState => {
    switch (action.type) {
      case ActionType.SET_SEARCH_LOADING:
        state = {
          loading: true,
          results: [],
          failed: false,
        };
        return state;
      case ActionType.SET_SEARCH_FAILED:
        state = {
          loading: false,
          results: [],
          failed: true,
        };
        return state;
      case ActionType.SEARCH_COINS:
        state = {
          loading: false,
          results: action.payload,
          failed: false,
        };
        return state;
      default:
        return state;
    }
  },
);

export default reducer;
