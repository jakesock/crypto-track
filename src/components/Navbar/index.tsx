import { useStyles } from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Crypto Track</h1>
    </div>
  );
};

export default Navbar;
