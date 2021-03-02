import Typography from '@material-ui/core/Typography';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Coin } from '../../state';

import { useStyles } from './styles';

interface CurrentPriceProps {
  coin: Coin;
}

const CurrentPrice: React.FC<CurrentPriceProps> = ({ coin }) => {
  const classes = useStyles();

  const currency = useTypedSelector((state) => {
    return state.preferences.currency;
  });

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <Typography className={classes.label} variant="body1" component="p">
          Current Price ({currency.id.toUpperCase()}):
        </Typography>
        <Typography className={classes.data} variant="h6" component="p">
          {currency.symbol}
          {coin.current_price.toFixed(2)}
        </Typography>
      </div>
      <div className={classes.contentWrapper}>
        <Typography className={classes.label} variant="body1" component="p">
          Price Change Last 24 Hours:
        </Typography>
        <Typography
          className={`${classes.data} ${
            coin.price_change_24h < 0 ? classes.negative : classes.positive
          }`}
          variant="h6"
          component="p"
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Typography>
      </div>
    </div>
  );
};

export default CurrentPrice;
