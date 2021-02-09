import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#6698FF',
      main: '#3E7BFA',
      dark: '#3568D4',
    },
    error: {
      light: '#F88080',
      main: '#F75C5D',
      dark: '#F63C3B',
    },
    success: {
      light: '#57EBA1',
      main: '#3FD98A',
      dark: '#37C26F',
    },
    warning: {
      light: '#FBCC76',
      main: '#F9AC42',
      dark: '#F88802',
    },
    info: {
      light: '#9DBFF9',
      main: '#5B8DEF',
      dark: '#2363F7',
    },
    background: {
      default: '#FAFAFC',
    },
    text: {
      primary: '#2E2F43',
      secondary: '#555770',
      disabled: '#8F90A6',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#6698FF',
      main: '#3E7BFA',
      dark: '#3568D4',
    },
    error: {
      light: '#F88080',
      main: '#F75C5D',
      dark: '#F63C3B',
    },
    success: {
      light: '#57EBA1',
      main: '#3FD98A',
      dark: '#37C26F',
    },
    warning: {
      light: '#FBCC76',
      main: '#F9AC42',
      dark: '#F88802',
    },
    info: {
      light: '#9DBFF9',
      main: '#5B8DEF',
      dark: '#2363F7',
    },
    background: {
      default: '#1C1C28',
      paper: '#28293D',
    },
    text: {
      primary: '#FAFAFC',
      secondary: '#F2F2F5',
      disabled: '#EBEBF0',
    },
  },
});
