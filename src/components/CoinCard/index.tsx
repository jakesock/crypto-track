import { Link } from 'react-router-dom';
import { Card, CardContent, Grid } from '@material-ui/core';
import { Coin, CoinResult, TrendingCoin } from '../../state';

import PortfolioCardContent from './PortfolioCardContent';
import ExploreCardContent from './ExploreCardContent';
import CoinCardOptions from './CoinCardOptions';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { useStyles } from './styles';

interface CoinCardProps {
  coin: Coin | CoinResult | TrendingCoin;
  type: 'portfolio' | 'explore';
}

const CoinCard: React.FC<CoinCardProps> = ({ coin, type }) => {
  const classes = useStyles();
  const currencySymbol = useTypedSelector(
    (state) => state.preferences.currency.symbol,
  );

  const renderedCardContent = () => {
    switch (type) {
      case 'explore':
        return <ExploreCardContent coin={coin as CoinResult | TrendingCoin} />;
      case 'portfolio':
        return (
          <PortfolioCardContent
            coin={coin as Coin}
            currencySymbol={currencySymbol}
          />
        );
    }
  };

  return (
    <Link className={classes.root} to={`/coin/${coin.id}`}>
      <li className={classes.li}>
        <Card className={classes.card}>
          <div className={classes.cardOptionsContainer}>
            <CoinCardOptions coinId={coin.id} />
          </div>
          <CardContent>
            <Grid
              className={`${type === 'explore' && classes.exploreCardContent}`}
              container
              alignItems="center"
            >
              {renderedCardContent()}
            </Grid>
          </CardContent>
        </Card>
      </li>
    </Link>
  );
};

export default CoinCard;
