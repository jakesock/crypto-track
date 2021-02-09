import { IconButton } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import NavHeader from './NavHeader';
import NavLink from './NavLink';
import { useStyles } from './styles';
import { NAV_LINKS } from '../../constants';

interface NavbarProps {
  isDarkTheme: boolean;
  handleThemeChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkTheme, handleThemeChange }) => {
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
        <IconButton
          className={classes.themeToggleButton}
          onClick={handleThemeChange}
        >
          {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
