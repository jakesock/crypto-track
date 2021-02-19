import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import FooterTitle from './FooterTitle';
import Copyright from './Copyright';
import FooterIconLink from './FooterIconLink';

import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <FooterTitle text="CryptoTrack" />
      <Copyright
        name="Jake Thomas"
        link="https://jakethomas.dev"
        year="twenty twenty-one"
      />
      <div className={classes.footerLinkContainer}>
        <FooterIconLink to="https://github.com/jakesock/crypto-track">
          <GitHubIcon />
        </FooterIconLink>
        <FooterIconLink to="https://linkedin.com/in/jakesock">
          <LinkedInIcon />
        </FooterIconLink>
      </div>
    </footer>
  );
};

export default Footer;
