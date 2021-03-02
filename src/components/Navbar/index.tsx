import NavHeader from './NavHeader';
import NavLink from './NavLink';
import NavSettings from './NavSettings';
import { useStyles } from './styles';
import { NAV_LINKS } from '../../constants';

interface NavbarProps {
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkTheme }) => {
  const classes = useStyles();

  const renderedLinks = () => {
    return (
      <nav>
        <ul className={classes.navLinkList}>
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.route}>
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
      <div className={classes.navOptions}>
        {renderedLinks()}
        <NavSettings isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
};

export default Navbar;
