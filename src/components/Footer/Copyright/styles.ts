import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '.5em 1em .225em 1em',
  },
  heart: {
    color: theme.palette.error.main,
  },
  copyrightIcon: {
    fontSize: '1rem',
    margin: '0 .25em',
  },
}));
