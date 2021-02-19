import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { CoinHistoryLabels, CoinHistoryTimeFrames } from '../../../state';

import { useStyles } from './styles';

interface TimeFrameSelectProps {
  timeFrame: CoinHistoryTimeFrames;
  setTimeFrame: React.Dispatch<React.SetStateAction<CoinHistoryTimeFrames>>;
}

const TimeFrameSelect: React.FC<TimeFrameSelectProps> = ({
  timeFrame,
  setTimeFrame,
}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimeFrame(event.target.value as CoinHistoryTimeFrames);
  };

  console.log(setTimeFrame);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="timeFrameSelect">Time Frame</InputLabel>
        <Select
          labelId="timeFrameSelect"
          value={timeFrame}
          onChange={handleChange}
          label="Time Frame"
        >
          <MenuItem value={CoinHistoryTimeFrames.day} selected>
            {CoinHistoryLabels.day}
          </MenuItem>
          <MenuItem value={CoinHistoryTimeFrames.week}>
            {CoinHistoryLabels.week}
          </MenuItem>
          <MenuItem value={CoinHistoryTimeFrames.twoWeeks}>
            {CoinHistoryLabels.twoWeeks}
          </MenuItem>
          <MenuItem value={CoinHistoryTimeFrames.month}>
            {CoinHistoryLabels.month}
          </MenuItem>
          <MenuItem value={CoinHistoryTimeFrames.sixMonths}>
            {CoinHistoryLabels.sixMonths}
          </MenuItem>
          <MenuItem value={CoinHistoryTimeFrames.year}>
            {CoinHistoryLabels.year}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default TimeFrameSelect;
