import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CoinHistoryTimeFrames, PriceHistoryList } from '../../../state';
import CoinChart from '../../CoinChart';

export type PriceData = {
  x: number;
  y: number;
}[];

const CoinDetail: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState(CoinHistoryTimeFrames.day);
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

  return (
    <div>
      {!loading && coinDetails && coinHistory ? (
        <div>
          <h2>CoinDetail for {coinDetails.name}</h2>
          <CoinChart
            data={{
              price: formatPriceData(coinHistory.price),
              historyLabel: coinHistory.label,
            }}
            currency={preferredCurrency}
            details={coinDetails}
            timeFrame={timeFrame}
            setTimeFrame={setTimeFrame}
          />
        </div>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default CoinDetail;
