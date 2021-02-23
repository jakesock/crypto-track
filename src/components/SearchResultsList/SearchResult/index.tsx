import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
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
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Link className={classes.link} to={`/coin/${id}`}>
          <li className={classes.li}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Grid item xs={4}>
                  <Grid container justify="center">
                    <img
                      className={classes.image}
                      src={large}
                      alt={`${name} Logo`}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justify="center">
                    <Typography className={classes.name} variant="h6" component="p">
                      {name}&nbsp;({symbol.toUpperCase()})
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justify="center">
                    {market_cap_rank && (
                      <Typography
                        className={classes.rank}
                        variant="body1"
                        component="p"
                      >
                        #{market_cap_rank}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </li>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
