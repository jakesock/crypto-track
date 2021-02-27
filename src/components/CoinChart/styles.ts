import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  canvasContainer: {
    // position: 'relative',
    // width: '100%',
  },
}));
