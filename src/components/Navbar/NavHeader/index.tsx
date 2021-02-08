import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface NavHeaderProps {
  title: string;
}

const NavHeader: React.FC<NavHeaderProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.headerTextWrapper}
        component={Link}
        to="/"
        disableRipple
      >
        <Typography className={classes.headerText} variant="h1">
          CryptoTrack
        </Typography>
      </Button>
    </>
  );
};

export default NavHeader;
