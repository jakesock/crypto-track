import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { Paper, useTheme, Typography } from '@material-ui/core';
import { chartOptions } from '../../config/chart';
import { PriceData } from '../pages/CoinDetail';
import { Coin, CoinHistoryTimeFrames, CoinHistoryLabels } from '../../state';
import TimeFrameSelect from './TimeFrameSelect';

import { useStyles } from './styles';

interface CoinChartProps {
  data: {
    price: PriceData;
    historyLabel: CoinHistoryLabels;
  };
  currency: string;
  details: Coin;
  timeFrame: CoinHistoryTimeFrames;
  setTimeFrame: React.Dispatch<React.SetStateAction<CoinHistoryTimeFrames>>;
}

const CoinChart: React.FC<CoinChartProps> = ({
  data,
  currency,
  details,
  timeFrame,
  setTimeFrame,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    if (chartRef && chartRef.current && data && details) {
      new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: `${details.name} Price (${currency.toUpperCase()})`,
              data: data.price,
              backgroundColor: 'rgba(102, 152, 255, .4)',
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 2,
            },
          ],
        },
        options: chartOptions,
      });
    }
  }, [theme, data, currency, details]);

  const renderedPrice = () => {
    if (details) {
      return (
        <>
          <Typography variant="h5" component="p">
            {details.name} Price History Last {data.historyLabel}
          </Typography>
          <TimeFrameSelect timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
          <Typography variant="h6" component="p">
            Current Price ({currency.toUpperCase()}):{' '}
            {details.current_price.toFixed(2)}
          </Typography>
          <Typography variant="h6" component="p">
            Price Change Last 24 Hours:{' '}
            <span
              className={`${classes.priceChange} ${
                details.price_change_24h < 0 ? classes.negative : classes.positive
              }`}
            >
              {details.price_change_percentage_24h.toFixed(2)}%
            </span>
          </Typography>
        </>
      );
    } else {
      return;
    }
  };

  return (
    <Paper className={classes.paper}>
      <div>{renderedPrice()}</div>
      <div>
        <canvas
          ref={chartRef}
          id="coinChart"
          width={250}
          height={500}
          aria-label="Coin Prices Chart"
          role="img"
        ></canvas>
      </div>
    </Paper>
  );
};

export default CoinChart;
