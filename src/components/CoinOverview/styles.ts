import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
