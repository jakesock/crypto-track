import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '0 .5em',
    marginBottom: '1rem',
  },
  gridContainer: {
    padding: '0 1rem',
  },
  headerText: {
    fontWeight: 600,
  },
}));
