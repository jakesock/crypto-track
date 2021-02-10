import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const CoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getCoin } = useActions();

  const loading = useTypedSelector(({ coinDetail: { loading } }) => {
    return loading;
  });
  const coin = useTypedSelector(({ coinDetail: { coin } }) => {
    return coin[id];
  });

  useEffect(() => {
    getCoin(id);
  }, [getCoin, id]);

  return (
    <div>
      {!loading && coin ? <h2>CoinDetail for {coin.name}</h2> : 'loading...'}
    </div>
  );
};

export default CoinDetail;
