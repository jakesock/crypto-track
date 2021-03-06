import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
}));
