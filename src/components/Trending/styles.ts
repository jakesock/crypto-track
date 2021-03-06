import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  headerContent: {
    margin: theme.spacing(4),
  },
  ul: {
    padding: 0,
  },
}));
