import { ActionType } from '../actionTypes';
import { Action, Currency } from '../actions';

interface PreferencesState {
  isDarkTheme: boolean;
  currency: Currency;
}

const initialState: PreferencesState = {
  isDarkTheme: true,
  currency: {
    symbol: '$',
    nameLower: 'usd',
    nameUpper: 'USD',
  },
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
