import { Typography } from '@material-ui/core';
import CoinCardList from '../CoinCardList';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useStyles } from './styles';

const Trending: React.FC = () => {
  const classes = useStyles();

  const loading = useTypedSelector(({ trending }) => trending.loading);
  const trending = useTypedSelector(({ trending }) => trending.results);

  return (
    <section>
      <header className={classes.header}>
        <Typography
          className={classes.headerContent}
          variant="h4"
          component="header"
        >
          Popular Searches Recently
        </Typography>
      </header>
      {loading ? (
        <div>loading...</div>
      ) : (
        <CoinCardList coins={trending} type="explore" />
      )}
    </section>
  );
};

export default Trending;
