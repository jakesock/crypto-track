import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CoinHistoryTimeFrames } from '../../../state';

const CoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getCoin } = useActions();

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
    getCoin(id, preferredCurrency, CoinHistoryTimeFrames.day);
  }, [getCoin, id, preferredCurrency]);

  return (
    <div>
      {!loading && coinDetails && coinHistory ? (
        <div>
          <h2>CoinDetail for {coinDetails.name}</h2>
        </div>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default CoinDetail;
