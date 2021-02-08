import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useStyles } from './styles';

interface NavLinkProps {
  route: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ route, label }) => {
  const classes = useStyles();

  return (
    <>
      <Button component={Link} to={route} className={classes.root}>
        {label}
      </Button>
    </>
  );
};

export default NavLink;
