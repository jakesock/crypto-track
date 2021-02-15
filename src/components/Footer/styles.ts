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
  footerTitleWrapper: {
    textTransform: 'none',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  footerTitle: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  copyrightContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '.5em 1em .225em 1em',
  },
  copyrightIcon: {
    fontSize: '1rem',
    margin: '0 .25em',
  },
  footerLinkContainer: {},
  footerLink: {},
  heart: {
    color: theme.palette.error.main,
  },
}));
