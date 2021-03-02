import { Grid, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { Coin } from '../../../state';
import { useStyles } from './styles';

interface PortfolioCardContentProps {
  coin: Coin;
  currencySymbol: string;
}

const PortfolioCardContent: React.FC<PortfolioCardContentProps> = ({
  coin,
  currencySymbol,
}) => {
  const priceChangeIsNegative = coin.price_change_percentage_24h < 0;
  const classes = useStyles();

  return (
    <>
      <Grid item xs={3}>
        <Grid container alignItems="center">
          <img src={coin.image} alt={`${coin.name} Logo`} />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" component="p">
          {coin.name}&nbsp;({coin.symbol.toUpperCase()})
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" component="p">
          {currencySymbol}
          {coin.current_price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography
          className={`${classes.priceChangeInfo} ${
            priceChangeIsNegative ? classes.negative : classes.positive
          }`}
          variant="body1"
        >
          {priceChangeIsNegative ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Typography>
      </Grid>
    </>
  );
};

export default PortfolioCardContent;
