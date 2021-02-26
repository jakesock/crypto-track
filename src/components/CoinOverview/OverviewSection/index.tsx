import { Divider, Grid } from '@material-ui/core';
import OverviewDataDisplay from './OverviewDataDisplay';

import { useStyles } from './styles';

export interface SectionInfo {
  label: string;
  data: number | 'N/A';
}

export interface OverviewSectionProps {
  top: SectionInfo;
  bottom: SectionInfo;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ top, bottom }) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} item xs={4}>
        <OverviewDataDisplay info={top} />
        <Divider />
        <OverviewDataDisplay info={bottom} />
      </Grid>
    </>
  );
};

export default OverviewSection;
