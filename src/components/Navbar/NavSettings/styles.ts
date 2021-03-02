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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '&:first-of-type': {
      marginBottom: theme.spacing(3),
    },
  },
  controlSectionContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
}));
