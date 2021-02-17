import { useTypedSelector } from '../../hooks/useTypedSelector';

import SearchResult from './SearchResult';

const SearchResultsList: React.FC = () => {
  const results = useTypedSelector((state) => {
    return state.search.results;
  });
  const loading = useTypedSelector((state) => {
    return state.search.loading;
  });

  const renderedResults = () => {
    return results.map((coin) => {
      return <SearchResult key={coin.id} coin={coin} />;
    });
  };

  return loading ? <div>loading...</div> : <div>{renderedResults()}</div>;
};

export default SearchResultsList;
