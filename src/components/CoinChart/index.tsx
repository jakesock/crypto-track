import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { Paper, useTheme } from '@material-ui/core';
import { chartOptions } from '../../config/chart';
import { PriceData } from '../pages/CoinDetail';
import { Coin } from '../../state';
import { useStyles } from './styles';

interface CoinChartProps {
  priceHistory: PriceData;
  currency: string;
  details: Coin;
}

const CoinChart: React.FC<CoinChartProps> = ({
  priceHistory,
  currency,
  details,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    if (chartRef && chartRef.current && priceHistory && details) {
      new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: `${details.name} Price (${currency})`,
              data: priceHistory,
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
  }, [theme, priceHistory, currency, details]);

  return (
    <Paper className={classes.paper}>
      <div className={classes.canvasContainer}>
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
