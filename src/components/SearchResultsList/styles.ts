import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  resultsHeaderContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  resultsHeader: {
    color: theme.palette.text.primary,
  },
  ul: {
    marginTop: theme.spacing(3),
    padding: 0,
  },
}));
