import { Paper, Grid } from '@material-ui/core';
import OverviewSection from './OverviewSection';
import { Coin } from '../../state';

import { useOverviewSectionData } from '../../hooks/useOverviewSectionData';
import { useStyles } from './styles';

interface CoinOverviewProps {
  coin: Coin;
}

const CoinOverview: React.FC<CoinOverviewProps> = ({ coin }) => {
  const classes = useStyles();

  const sectionData = useOverviewSectionData(coin);

  const renderedSections = () => {
    return sectionData.map((section) => {
      return (
        <OverviewSection
          key={section.top.label}
          top={section.top}
          bottom={section.bottom}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>{renderedSections()}</Grid>
      </Paper>
    </div>
  );
};

export default CoinOverview;
