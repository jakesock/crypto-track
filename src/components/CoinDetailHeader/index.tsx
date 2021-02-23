import { Typography } from '@material-ui/core';
import { Coin, CoinHistoryLabels, CoinHistoryTimeFrames } from '../../state';
import { PriceData } from '../pages/CoinDetail';
import TimeFrameSelect from './TimeFrameSelect';

import { useStyles } from './styles';

interface CoinDetailHeaderProps {
  data: {
    price: PriceData;
    historyLabel: CoinHistoryLabels;
  };
  details: Coin;
  timeFrame: CoinHistoryTimeFrames;
  setTimeFrame: React.Dispatch<React.SetStateAction<CoinHistoryTimeFrames>>;
}

const CoinDetailHeader: React.FC<CoinDetailHeaderProps> = ({
  details,
  data,
  timeFrame,
  setTimeFrame,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="p">
        {details.name} Price History Last {data.historyLabel}
      </Typography>
      <TimeFrameSelect timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
    </div>
  );
};

export default CoinDetailHeader;
