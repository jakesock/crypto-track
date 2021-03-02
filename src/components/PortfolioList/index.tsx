import { Paper, Grid } from '@material-ui/core';
import PortfolioListHeader from './PortfolioListHeader';
import CoinCardList from '../CoinCardList';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useStyles } from './styles';

const PortfolioList: React.FC = () => {
  const loading = useTypedSelector(({ portfolio: { loading } }) => loading);
  const coins = useTypedSelector(({ portfolio: { coins, order } }) => {
    return order
      .map((id) => coins[id])
      .filter((el) => el !== null && typeof el !== 'undefined');
  });

  const classes = useStyles();

  const renderedCoins = () => {
    if (coins.length) {
      return <CoinCardList coins={coins} type="portfolio" />;
    } else {
      // break out into own component, remove PortfolioListHeader in this case
      return <div>You don't have any saved coins!</div>;
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <PortfolioListHeader />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              {loading ? 'Loading...' : renderedCoins()}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PortfolioList;
