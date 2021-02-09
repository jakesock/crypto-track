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
    boxShadow:
      '0px 3px 3px -1px rgb(0 0 0 / 20%), 0px 3px 4px 1px rgb(0 0 0 / 14%), 0px 2px 4px 1px rgb(0 0 0 / 12%)',
    '& .MuiCardContent-root': {
      padding: '1rem 1rem',
    },
    '&:hover': {
      boxShadow:
        '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 10px 2px rgb(0 0 0 / 12%)',
      '& $cardOptionsContainer': {
        opacity: 1,
      },
    },
  },
  cardOptionsContainer: {
    opacity: 0,
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
