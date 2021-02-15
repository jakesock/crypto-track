import { Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  Link as MaterialLink,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Button
        className={classes.footerTitleWrapper}
        component={Link}
        to="/"
        disableRipple
      >
        <Typography className={classes.footerTitle} variant="h1" component="p">
          CryptoTrack
        </Typography>
      </Button>
      <p className={classes.copyrightContainer}>
        Made with <span className={classes.heart}>&nbsp;&lt;3&nbsp;</span> by&nbsp;
        <MaterialLink href="https://jakethomas.dev">Jake Thomas</MaterialLink>
        <CopyrightIcon className={classes.copyrightIcon} />
        twenty twenty-one
      </p>
      <div className={classes.footerLinkContainer}>
        <IconButton
          className={classes.footerLink}
          component={MaterialLink}
          href="https://github.com/jakesock/crypto-track"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton component={MaterialLink} href="https://linkedin.com/in/jakesock">
          <LinkedInIcon />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
