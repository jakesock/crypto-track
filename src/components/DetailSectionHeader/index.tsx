import { Typography } from '@material-ui/core';
import { CoinHistoryTimeFrames } from '../../state';
import TimeFrameSelect from './TimeFrameSelect';

import { useStyles } from './styles';

interface DetailSectionHeaderProps {
  timeFrame?: CoinHistoryTimeFrames;
  setTimeFrame?: React.Dispatch<React.SetStateAction<CoinHistoryTimeFrames>>;
}

const DetailSectionHeader: React.FC<DetailSectionHeaderProps> = ({
  children,
  timeFrame,
  setTimeFrame,
}) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography variant="h5" component="p">
        {children}
      </Typography>
      {timeFrame && setTimeFrame && (
        <TimeFrameSelect timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      )}
    </header>
  );
};

export default DetailSectionHeader;
