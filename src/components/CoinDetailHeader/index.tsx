import { Coin } from '../../state';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

interface CoinDetailHeaderProps {
  coin: Coin;
}

const CoinDetailHeader: React.FC<CoinDetailHeaderProps> = ({ coin }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <img className={classes.image} src={coin.image} alt={`${coin.name} Logo`} />
      <Typography className={classes.title} variant="h2">
        {coin.name}&nbsp;({coin.symbol.toUpperCase()})
      </Typography>
    </header>
  );
};

export default CoinDetailHeader;
