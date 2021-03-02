import { Coin, CoinResult, TrendingCoin } from '../../state';
import CoinCard from '../CoinCard';

import { useStyles } from './styles';

type CoinsList = CoinTypes[];
type CoinTypes = Coin | CoinResult | TrendingCoin;

interface CoinCardListProps {
  coins: CoinsList;
  type: 'portfolio' | 'explore';
}

const CoinCardList: React.FC<CoinCardListProps> = ({ coins, type }) => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {coins.map((coin) => {
        return <CoinCard key={coin.id} coin={coin} type={type} />;
      })}
    </ul>
  );
};

export default CoinCardList;
