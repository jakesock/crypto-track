import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import {
  CoinHistoryLabels,
  CoinHistoryTimeFrames,
  PriceHistoryList,
} from '../../../state';
import CoinDetailHeader from '../../CoinDetailHeader';
import CoinChart from '../../CoinChart';

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

  const formatPriceData = (data: PriceHistoryList): PriceData => {
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
  const preferredCurrency = useTypedSelector(
    ({ portfolio: { preferredCurrency } }) => {
      return preferredCurrency;
    },
  );

  useEffect(() => {
    getCoin(id, preferredCurrency, timeFrame);
  }, [getCoin, id, preferredCurrency, timeFrame]);

  useEffect(() => {
    if (!loading && coinDetails && coinHistory) {
      setData({
        price: formatPriceData(coinHistory.price),
        historyLabel: coinHistory.label,
      });
    }
  }, [coinDetails, coinHistory, loading]);

  return (
    <div>
      {!loading && coinDetails && data && coinHistory ? (
        <div>
          <CoinDetailHeader
            data={data}
            details={coinDetails}
            timeFrame={timeFrame}
            setTimeFrame={setTimeFrame}
          />
          <CoinChart
            priceHistory={formatPriceData(coinHistory.price)}
            currency={preferredCurrency}
            details={coinDetails}
          />
        </div>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default CoinDetail;
