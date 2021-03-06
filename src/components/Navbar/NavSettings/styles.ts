import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: '.75rem',
    color: theme.palette.info.main,
  },
  dialog: {
    position: 'relative',
  },
  dialogContent: {
    padding: theme.spacing(2, 8),
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  formControl: {
    flexDirection: 'row',
  },
  divider: {
    margin: theme.spacing(1.5, 0),
  },
  controlSectionContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
  },
}));
