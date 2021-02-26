import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  label: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    fontSize: theme.spacing(1.9),
  },
  data: {
    marginBottom: theme.spacing(1),
    fontSize: theme.spacing(3),
  },
}));
