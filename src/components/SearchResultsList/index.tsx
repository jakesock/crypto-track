import { useStyles } from './styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import SearchResult from './SearchResult';

const SearchResultsList: React.FC = () => {
  const classes = useStyles();
  const { results, loading, failed, term } = useTypedSelector((state) => {
    return state.search;
  });

  const renderedResults = () => {
    // Break each case out into own component
    if (loading) {
      return <div>loading...</div>;
    } else if (failed) {
      return (
        <>
          {term && (
            <div className={classes.resultsHeaderContainer}>
              <Typography className={classes.resultsHeader} variant="h4">
                No results found for '{term}'
              </Typography>
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          {term && (
            <div className={classes.resultsHeaderContainer}>
              <Typography className={classes.resultsHeader} variant="h4">
                Results for '{term}'
              </Typography>
              <Divider className={classes.divider} variant="fullWidth" />
            </div>
          )}
          <ul className={classes.ul}>
            {results.map((coin) => {
              return <SearchResult key={coin.id} coin={coin} />;
            })}
          </ul>
        </>
      );
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        {renderedResults()}
      </Grid>
    </Grid>
  );
};

export default SearchResultsList;
