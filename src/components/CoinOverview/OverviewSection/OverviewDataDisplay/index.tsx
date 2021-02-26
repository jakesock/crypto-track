import Typography from '@material-ui/core/Typography';
import { SectionInfo } from '../../OverviewSection';

import { useStyles } from './styles';

interface OverviewDataDisplayProps {
  info: SectionInfo;
}

const OverviewDataDisplay: React.FC<OverviewDataDisplayProps> = ({ info }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.label} variant="caption" component="p">
        {info.label}
      </Typography>
      <Typography className={classes.data} variant="body1">
        {info.data}
      </Typography>
    </div>
  );
};

export default OverviewDataDisplay;
