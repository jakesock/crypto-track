import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
    '& .MuiCardContent-root': {
      padding: theme.spacing(2),
      '&:lastchild': {
        padddingBottom: 'inherit',
      },
    },
  },
  link: {
    textDecoration: 'none',
  },
  li: {
    listStyle: 'none',
  },
  card: {
    position: 'relative',
    transition: 'transform 300ms, box-shadow 2000ms cubic-bezier(.165, .84, .44, 1)',
    WebkitFontSmoothing: 'antialiased',
    '&:hover': {
      boxShadow: '0 8px 17px 0 rgba(0 0 0 / 20%), 0 6px 20px 0 rgba(0 0 0 / 15%);',
      transform: 'scale3d(1.006, 1.006, 1)',
      '& $cardOptionsContainer': {
        opacity: 1,
      },
    },
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: theme.spacing(12),
  },
  name: {},
  rank: {
    color: theme.palette.success.main,
  },
}));
