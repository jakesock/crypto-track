import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  resultsHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  resultsHeader: {
    color: theme.palette.text.primary,
    margin: theme.spacing(4),
  },
  ul: {
    padding: 0,
  },
}));
