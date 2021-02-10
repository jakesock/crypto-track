import produce from 'immer';
import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { Coin, CoinHistory } from '../Coin';

interface CoinState {
  loading: boolean;
  detail: Coin | null;
  history: CoinHistory | null;
}

const initialState: CoinState = {
  loading: false,
  detail: null,
  history: null,
};

const reducer = produce(
  (state: CoinState = initialState, action: Action): CoinState => {
    switch (action.type) {
      case ActionType.SET_COIN_LOADING:
        state = {
          ...state,
          loading: true,
        };
        return state;
      case ActionType.GET_COIN:
        state = {
          loading: false,
          detail: action.payload.detail,
          history: {
            price: action.payload.priceHistory,
            label: action.payload.label,
          },
        };
        return state;
      default:
        return state;
    }
  },
);

export default reducer;
