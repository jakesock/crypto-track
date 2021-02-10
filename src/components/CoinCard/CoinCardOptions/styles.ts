import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  menuItemIcon: {
    marginRight: '.625em',
  },
  menuItemText: {
    marginRight: '1em',
  },
  menuItemDanger: {
    color: theme.palette.error.main,
  },
}));
