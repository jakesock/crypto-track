import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 3rem',
    width: '100%',
  },
  image: {
    maxWidth: '25vw',
    marginBottom: '1rem',
  },
  heading: {
    marginBottom: '1.5rem',
  },
  caption: {
    textAlign: 'center',
    marginBottom: '1.25rem',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
