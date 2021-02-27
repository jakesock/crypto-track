// import { useEffect, useState } from 'react';

import CoinChart from '../../CoinChart';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useChartData } from '../../../hooks/useChartData';

const Home: React.FC = () => {
  const loading = useTypedSelector(({ portfolio }) => portfolio.loading);
  const coins = useTypedSelector(({ portfolio }) => {
    return portfolio.favorites.map((id) => portfolio.coins[id]);
  });
  const favoriteHistory = useTypedSelector(({ portfolio }) => {
    return portfolio.favoriteHistory;
  });
  const currency = useTypedSelector(({ preferences }) => {
    return preferences.currency.nameUpper;
  });

  const priceHistory = useChartData(favoriteHistory);

  return (
    <main>
      <header>
        <h2>Home</h2>
      </header>
      {!loading && priceHistory.length ? (
        <div>
          <section>
            <CoinChart
              priceHistory={priceHistory}
              currency={currency}
              details={coins[0]}
            />
          </section>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </main>
  );
};

export default Home;
