import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '1rem 1rem',
  },
  priceChange: {},
  negative: {
    color: theme.palette.error.main,
  },
  positive: {
    color: theme.palette.success.main,
  },
}));
