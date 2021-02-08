import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface NavHeaderProps {
  title: string;
}

const NavHeader: React.FC<NavHeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.headerText} variant="h1">
        CryptoTrack
      </Typography>
    </div>
  );
};

export default NavHeader;
