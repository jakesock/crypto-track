import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface FooterTitleProps {
  text: string;
}

const FooterTitle: React.FC<FooterTitleProps> = ({ text }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} component={Link} to="/" disableRipple>
      <Typography className={classes.text} variant="h1" component="p">
        {text}
      </Typography>
    </Button>
  );
};

export default FooterTitle;
