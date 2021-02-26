import { useEffect, useState } from 'react';
import { Coin } from '../state';
import { OverviewSectionProps } from '../components/CoinOverview/OverviewSection';

export const useOverviewSectionData = (coin: Coin): OverviewSectionProps[] => {
  const [sectionData, setSectionData] = useState<OverviewSectionProps[]>([]);

  const checkData = (data: number | null): number | 'N/A' => {
    if (data) {
      return data;
    } else {
      return 'N/A';
    }
  };

  useEffect(() => {
    const {
      market_cap,
      total_volume,
      circulating_supply,
      total_supply,
      high_24h,
      low_24h,
    } = coin;

    setSectionData([
      {
        top: {
          label: 'Market Cap',
          data: checkData(market_cap),
        },
        bottom: {
          label: 'Total Volume',
          data: checkData(total_volume),
        },
      },
      {
        top: {
          label: 'Circulating Supply',
          data: checkData(circulating_supply),
        },
        bottom: {
          label: 'Total Supply',
          data: checkData(total_supply),
        },
      },
      {
        top: {
          label: 'High (24h)',
          data: checkData(high_24h),
        },
        bottom: {
          label: 'Low (24h)',
          data: checkData(low_24h),
        },
      },
    ]);
  }, [coin]);

  return sectionData;
};
