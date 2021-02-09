import { Paper, Grid } from '@material-ui/core';
import CoinListHeader from './CoinListHeader';
import CoinCard from '../CoinCard';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useStyles } from './styles';

const CoinList: React.FC = () => {
  const loading = useTypedSelector(({ portfolio: { loading } }) => loading);
  const coins = useTypedSelector(({ portfolio: { coins, order } }) => {
    return order.map((id) => coins[id]);
  });

  const classes = useStyles();

  const renderedCoins = () => {
    return (
      <ul className={classes.ul}>
        {coins.map((coin) => {
          return <CoinCard key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <CoinListHeader />
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

export default CoinList;
