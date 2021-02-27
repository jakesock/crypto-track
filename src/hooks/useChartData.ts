import { useState, useEffect } from 'react';

import { CoinHistoryList } from '../state';
import { PriceData } from '../components/pages/CoinDetail';

export const useChartData = (data: CoinHistoryList | null): PriceData => {
  const [formattedData, setFormattedData] = useState<PriceData>([]);

  useEffect(() => {
    if (data) {
      setFormattedData(
        data.map((item) => {
          return {
            x: item[0],
            y: item[1],
          };
        }),
      );
    }
  }, [setFormattedData, data]);

  return formattedData;
};
