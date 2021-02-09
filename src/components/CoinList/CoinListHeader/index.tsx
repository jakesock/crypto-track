import { Typography, Grid } from '@material-ui/core';

import { useStyles } from './styles';

const CoinListHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Typography className={classes.headerText} variant="body1">
            Name (Symbol)
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.headerText} variant="body1">
            Current Price
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.headerText} variant="body1">
            Price Change (% Last 24 Hours)
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoinListHeader;
