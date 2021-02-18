import { Grid } from '@material-ui/core';
import { CoinResult } from '../../../state/Coin';

import { useStyles } from './styles';

interface SearchResultProps {
  coin: CoinResult;
}

const SearchResult: React.FC<SearchResultProps> = ({ coin }) => {
  const { id, name, symbol, market_cap_rank, large } = coin;
  const classes = useStyles();

  console.log(id);

  // STYLE THIS
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <img src={large} alt={name} />
          <p>
            {name} ({symbol})
          </p>
          <p>#{market_cap_rank}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
