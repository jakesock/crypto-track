// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CoinDetailHeader from '../../CoinDetailHeader';
import CurrentPrice from '../../CurrentPrice';
import CoinChart from '../../CoinChart';
import CoinCardList from '../../CoinCardList';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useChartData } from '../../../hooks/useChartData';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

const Home: React.FC = () => {
  const classes = useStyles();
  const loading = useTypedSelector(({ portfolio }) => portfolio.loading);
  const coins = useTypedSelector(({ portfolio }) => {
    return portfolio.favorites.map((id) => portfolio.coins[id]);
  });
  const favoriteHistory = useTypedSelector(({ portfolio }) => {
    return portfolio.favoriteHistory;
  });
  const currency = useTypedSelector(({ preferences }) => {
    return preferences.currency.id.toUpperCase();
  });

  const priceHistory = useChartData(favoriteHistory);

  return (
    <main>
      <Typography>Your Favorites</Typography>
      {!loading && priceHistory.length ? (
        <div>
          <Link className={classes.link} to={`/coin/${coins[0].id}`}>
            <CoinDetailHeader coin={coins[0]} />
          </Link>
          <CurrentPrice coin={coins[0]} />
          <CoinChart
            priceHistory={priceHistory}
            currency={currency}
            details={coins[0]}
          />

          <CoinCardList coins={coins.slice(-2)} type="portfolio" />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </main>
  );
};

export default Home;
