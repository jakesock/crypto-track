import { Grid, Typography } from '@material-ui/core';

import { CoinResult, TrendingCoin } from '../../../state';

import { useStyles } from './styles';

interface ExploreCardContentProps {
  coin: CoinResult | TrendingCoin;
}

const ExploreCardContent: React.FC<ExploreCardContentProps> = ({ coin }) => {
  const classes = useStyles();
  const { name, symbol, large, market_cap_rank } = coin;

  return (
    <>
      <Grid item xs={4}>
        <Grid container justify="center">
          <img src={large} alt={`${name} Logo`} />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justify="center">
          <Typography
            className={classes.name}
            variant="h6"
            component="p"
            align="center"
          >
            {name}&nbsp;({symbol.toUpperCase()})
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container justify="center">
          {market_cap_rank && (
            <Typography
              className={classes.rank}
              variant="body1"
              component="p"
              align="center"
            >
              #{market_cap_rank}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ExploreCardContent;
