import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    marginLeft: '.75rem',
    padding: '6px 8px',
    fontSize: '1.25rem',
    letterSpacing: '0.02857em',
    textTransform: 'none',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    display: 'inline-block',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '2px',
      transform: 'translateX(-100%)',
      transition: 'transform 275ms ease',
    },
    '&:hover:before': {
      transform: 'translateX(0)',
    },
  },
  navLinkActive: {
    '&::before': {
      transform: 'translateX(0)',
    },
  },
}));
