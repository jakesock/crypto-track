import { NavLink as RouterLink } from 'react-router-dom';

import { useStyles } from './styles';

interface NavLinkProps {
  route: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ route, label }) => {
  const classes = useStyles();

  return (
    <>
      <RouterLink
        className={`${classes.root}`}
        activeClassName={`${classes.navLinkActive}`}
        to={route}
        exact
      >
        <span>{label}</span>
      </RouterLink>
    </>
  );
};

export default NavLink;
