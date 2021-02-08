import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    fontSize: '1.25rem',
    marginLeft: '.5rem',
    color: theme.palette.primary.main,
  },
}));
