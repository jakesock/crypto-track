import { Link } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

import { useStyles } from './styles';

interface CopyrightProps {
  name: string;
  link: string;
  year: string;
}

const Copyright: React.FC<CopyrightProps> = ({ name, link, year }) => {
  const classes = useStyles();

  return (
    <p className={classes.root}>
      Made with <span className={classes.heart}>&nbsp;&lt;3&nbsp;</span> by&nbsp;
      <Link href={link}>{name}</Link>
      <CopyrightIcon className={classes.copyrightIcon} />
      {year}
    </p>
  );
};

export default Copyright;
