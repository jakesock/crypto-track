import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: 'none',
  },
  li: {
    listStyle: 'none',
  },
  card: {
    position: 'relative',
    padding: '.5em',
    marginBottom: '1rem',
    transition: 'transform 300ms, box-shadow 2000ms cubic-bezier(.165, .84, .44, 1)',
    '& .MuiCardContent-root': {
      padding: '1rem 1rem',
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
  image: {
    width: '4.25rem',
  },
  priceChangeInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  positive: {
    color: theme.palette.success.main,
  },
  negative: {
    color: theme.palette.error.main,
  },
}));
