import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:first-of-type': {
      marginRight: theme.spacing(6),
    },
  },
  label: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.9),
  },
  data: {
    fontSize: theme.spacing(3),
  },
  negative: {
    color: theme.palette.error.main,
  },
  positive: {
    color: theme.palette.success.main,
  },
}));
