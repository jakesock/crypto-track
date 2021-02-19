import { Grid } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import SearchResult from './SearchResult';

const SearchResultsList: React.FC = () => {
  const { results, loading, failed, term } = useTypedSelector((state) => {
    return state.search;
  });

  const renderedResults = () => {
    // Break each case out into own component
    if (loading) {
      return <div>loading...</div>;
    } else if (failed) {
      return <div>No results found for '{term}'</div>;
    } else {
      return results.map((coin) => {
        return <SearchResult key={coin.id} coin={coin} />;
      });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        {renderedResults()}
      </Grid>
    </Grid>
  );
};

export default SearchResultsList;
