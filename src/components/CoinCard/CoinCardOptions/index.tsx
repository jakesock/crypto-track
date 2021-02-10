import { useState } from 'react';
import { Menu, MenuItem, Typography, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';

import { useActions } from '../../../hooks/useActions';
import { useStyles } from './styles';

interface CoinCardOptionsProps {
  id: string;
}

const CoinCardOptions: React.FC<CoinCardOptionsProps> = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { deletePortfolioCoin } = useActions();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleDeleteSelect = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    deletePortfolioCoin(id);
    handleClose(event);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton
        aria-controls="coin-options-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="saved-coin-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={4}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleDeleteSelect} className={classes.menuItemDanger}>
          <DeleteIcon fontSize="small" className={classes.menuItemIcon} />
          <Typography variant="inherit" className={classes.menuItemText}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CoinCardOptions;
