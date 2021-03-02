import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { Currency } from '../Coin';
import { CURRENCIES } from '../../constants';

interface PreferencesState {
  isDarkTheme: boolean;
  currency: Currency;
}

const initialState: PreferencesState = {
  isDarkTheme: true,
  currency: CURRENCIES['usd'],
};

const reducer = (
  state: PreferencesState = initialState,
  action: Action,
): PreferencesState => {
  switch (action.type) {
    case ActionType.GET_PREFERENCES:
      return {
        ...state,
        isDarkTheme: action.payload.isDarkTheme,
        currency: action.payload.currency,
      };
    case ActionType.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case ActionType.SET_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
