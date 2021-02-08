import { Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';
import astronaut from '../../../images/not-found.png';

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
        <img
          className={classes.image}
          src={astronaut}
          alt="Astronaut Floating In Space"
        />
        <Typography className={classes.heading} variant="h2">
          This Page is Lost in Space
        </Typography>
        <Typography className={classes.caption} variant="body1">
          You thought this mission to the moon would be a quick six month thing. Your
          neighbor offered to look after your dog. Your high school math teacher was
          impressed. He once said you wouldn’t amount to anything.You sure showed
          him. But now here you are, fifty feet from your spaceship with no way to
          get back. Your dog will be so sad. Your math teacher will be so smug.
          Pretty devastating.
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          component={Link}
          to="/"
        >
          Get Back To Earth
        </Button>
      </Paper>
    </main>
  );
};

export default NotFound;
