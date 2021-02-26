import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useStyles } from './styles';

const BackButton: React.FC = ({ children }) => {
  const classes = useStyles();
  let history = useHistory();

  const handleOnClick = () => {
    history.goBack();
  };

  return (
    <>
      <Button
        className={classes.root}
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={handleOnClick}
      >
        {children}
      </Button>
    </>
  );
};

export default BackButton;
