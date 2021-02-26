import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(4, 0, 6, 0),
  },
  title: {
    marginLeft: theme.spacing(1.5),
  },
  image: {
    width: theme.spacing(7.5),
  },
}));
