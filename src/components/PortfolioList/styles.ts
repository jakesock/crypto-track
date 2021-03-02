import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 3rem 1rem 3rem',
  },
  ul: {
    padding: 0,
    margin: 0,
  },
}));
