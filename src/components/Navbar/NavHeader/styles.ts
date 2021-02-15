import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  headerTextWrapper: {
    textTransform: 'none',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  headerText: {
    fontSize: '2.75rem',
    color: theme.palette.primary.main,
  },
}));
