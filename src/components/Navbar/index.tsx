import NavHeader from './NavHeader';
import NavLink from './NavLink';

import { useStyles } from './styles';

interface Link {
  route: string;
  label: string;
}

const NAV_LINKS: Link[] = [
  {
    route: '/',
    label: 'Coin Summary',
  },
  {
    route: '/test',
    label: 'Test Route',
  },
];

const Navbar = () => {
  const classes = useStyles();

  const renderedLinks = () => {
    return (
      <nav>
        <ul className={classes.navLinkList}>
          {NAV_LINKS.map((link) => {
            return (
              <li>
                <NavLink route={link.route} label={link.label} />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  return (
    <div className={classes.root}>
      <NavHeader title="CryptoTrack" />
      {renderedLinks()}
    </div>
  );
};

export default Navbar;
