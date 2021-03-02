import { CURRENCIES } from '../../constants';
import { GetPreferencesAction } from '../actions';
import { ActionType } from '../actionTypes';

enum ThemeOptions {
  dark = 'dark',
  light = 'light',
}

export const getPreferences = (): GetPreferencesAction => {
  const savedTheme = localStorage.getItem('theme') ?? ThemeOptions.dark;
  const isDarkTheme = savedTheme === ThemeOptions.dark;

  const savedCurrency = localStorage.getItem('currency') ?? 'usd';
  const currency = CURRENCIES[savedCurrency];

  return {
    type: ActionType.GET_PREFERENCES,
    payload: {
      isDarkTheme,
      currency,
    },
  };
};

export const setCurrency = (id: string) => {
  localStorage.setItem('currency', id);
  const currency = CURRENCIES[id];

  return {
    type: ActionType.SET_CURRENCY,
    payload: currency,
  };
};

export const setTheme = (isDarkTheme: boolean) => {
  const savedTheme = getThemeName(isDarkTheme);
  localStorage.setItem('theme', savedTheme);

  return {
    type: ActionType.SET_THEME,
    payload: isDarkTheme,
  };
};

const getThemeName = (isDarkTheme: boolean) => {
  return isDarkTheme ? ThemeOptions.dark : ThemeOptions.light;
};
