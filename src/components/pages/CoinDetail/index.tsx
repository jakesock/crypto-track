import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useChartData } from '../../../hooks/useChartData';
import {
  CoinHistoryLabels,
  CoinHistoryTimeFrames,
  CoinHistoryList,
} from '../../../state';
import BackButton from '../../BackButton';
import CoinDetailHeader from '../../CoinDetailHeader';
import CoinChart from '../../CoinChart';
import CoinOverview from '../../CoinOverview';
import DetailSectionHeader from '../../DetailSectionHeader';
import CurrentPrice from 'src/components/CurrentPrice';

export type PriceData = {
  x: number;
  y: number;
}[];

export type CoinDetailData = {
  price: PriceData;
  historyLabel: CoinHistoryLabels;
};

const CoinDetail: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState(CoinHistoryTimeFrames.day);
  const [data, setData] = useState<CoinDetailData | null>(null);
  const { id } = useParams<{ id: string }>();
  const { getCoin } = useActions();

  // Make useChartData Hook
  const formatPriceData = (data: CoinHistoryList): PriceData => {
    return data.map((item) => {
      return {
        x: item[0],
        y: item[1],
      };
    });
  };

  const loading = useTypedSelector(({ coinDetail: { loading } }) => {
    return loading;
  });
  const coinDetails = useTypedSelector(({ coinDetail: { detail } }) => {
    return detail;
  });
  const coinHistory = useTypedSelector(({ coinDetail: { history } }) => {
    return history;
  });
  const currency = useTypedSelector(({ preferences }) => {
    return preferences.currency.id.toUpperCase();
  });

  const priceHistory = useChartData(coinHistory.price);

  useEffect(() => {
    getCoin(id, currency, timeFrame);
  }, [getCoin, id, currency, timeFrame]);

  useEffect(() => {
    if (!loading && coinDetails && coinHistory) {
      setData({
        price: formatPriceData(coinHistory.price),
        historyLabel: coinHistory.label,
      });
    }
  }, [coinDetails, coinHistory, loading]);

  return (
    <main>
      {!loading && coinDetails && data && priceHistory.length ? (
        <div>
          <div>
            <BackButton>Back</BackButton>
          </div>
          <CoinDetailHeader coin={coinDetails} />
          <CurrentPrice coin={coinDetails} />
          <section>
            <DetailSectionHeader timeFrame={timeFrame} setTimeFrame={setTimeFrame}>
              Price History Last {coinHistory.label}
            </DetailSectionHeader>
            <CoinChart
              priceHistory={priceHistory}
              currency={currency}
              details={coinDetails}
            />
          </section>
          <section>
            <DetailSectionHeader>Overview</DetailSectionHeader>
            <CoinOverview coin={coinDetails} />
          </section>
        </div>
      ) : (
        'loading...'
      )}
    </main>
  );
};

export default CoinDetail;
