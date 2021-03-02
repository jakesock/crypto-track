import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: 'none',
    '& .MuiCardContent-root': {
      padding: theme.spacing(2),
      '&:lastchild': {
        paddingBottom: 'inherit',
      },
    },
  },
  li: {
    listStyle: 'none',
    marginTop: theme.spacing(2),
  },
  card: {
    position: 'relative',
    transition: 'transform 300ms, box-shadow 2000ms cubic-bezier(.165, .84, .44, 1)',
    WebkitFontSmoothing: 'antialiased',
    '& $img': {
      width: theme.spacing(12),
      borderRadius: '50%',
    },
    '&:hover': {
      boxShadow: '0 8px 17px 0 rgba(0 0 0 / 20%), 0 6px 20px 0 rgba(0 0 0 / 15%);',
      transform: 'scale3d(1.006, 1.006, 1)',
      '& $cardOptionsContainer': {
        opacity: 1,
      },
    },
  },
  cardOptionsContainer: {
    opacity: 0.45,
    transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  exploreCardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
