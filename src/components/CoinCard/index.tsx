import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import CoinCardOptions from './CoinCardOptions';

import { Coin } from '../../state';

import { useStyles } from './styles';

interface CoinCardProps {
  coin: Coin;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const classes = useStyles();
  const priceChangeIsNegative = coin.price_change_percentage_24h < 0;

  return (
    <Link className={classes.root} to={`/coin/${coin.id}`}>
      <li className={classes.li}>
        <Card className={classes.card}>
          <div className={classes.cardOptionsContainer}>
            <CoinCardOptions id={coin.id} />
          </div>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Grid container alignItems="center">
                  <img
                    className={classes.image}
                    src={coin.image}
                    alt={`${coin.name} Logo`}
                  />
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">
                  {coin.name}&nbsp;({coin.symbol.toUpperCase()})
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">
                  ${coin.current_price.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  className={`${classes.priceChangeInfo} ${
                    priceChangeIsNegative ? classes.negative : classes.positive
                  }`}
                  variant="body1"
                >
                  {priceChangeIsNegative ? (
                    <ArrowDropDownIcon />
                  ) : (
                    <ArrowDropUpIcon />
                  )}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </li>
    </Link>
  );
};

export default CoinCard;
