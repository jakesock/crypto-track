import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    margin: theme.spacing(2, 0, 3, 0),
  },
  navOptions: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '-.75rem',
  },
  navLinkList: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    paddingInlineStart: 0,
    '& li': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  themeToggleButton: {
    marginLeft: '.75rem',
    color: theme.palette.info.main,
  },
}));
