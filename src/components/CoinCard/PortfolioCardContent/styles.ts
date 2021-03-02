import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  priceChangeInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  positive: {
    color: theme.palette.success.main,
  },
  negative: {
    color: theme.palette.error.main,
  },
}));
