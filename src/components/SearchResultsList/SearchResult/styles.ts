import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(1),
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
