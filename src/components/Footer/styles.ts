import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  footerLinkContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
