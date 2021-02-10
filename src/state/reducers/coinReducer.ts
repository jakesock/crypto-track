import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { CoinsListState } from '../Coin';

interface CoinState {
  loading: boolean;
  coin: CoinsListState;
}

const initialState: CoinState = {
  loading: false,
  coin: {},
};

const reducer = (state: CoinState = initialState, action: Action): CoinState => {
  switch (action.type) {
    case ActionType.SET_COIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_COIN:
      return {
        ...state,
        loading: false,
        coin: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
