import { useState } from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Switch,
  FormGroup,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from '@material-ui/core';

import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useStyles } from './styles';

import { CURRENCIES_LIST } from '../../../constants';

interface NavSettingsProps {
  isDarkTheme: boolean;
}

const NavSettings: React.FC<NavSettingsProps> = ({ isDarkTheme }) => {
  const classes = useStyles();
  const { setTheme, setCurrency } = useActions();
  const [open, setOpen] = useState(false);
  const selectedCurrency = useTypedSelector(
    ({ preferences }) => preferences.currency.id,
  );

  const handleSettingsClick = () => {
    setOpen(true);
  };
  const handleSettingsClose = () => {
    setOpen(false);
  };
  const handleThemeChange = () => {
    setTheme(!isDarkTheme);
  };

  const handleCurrencyChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    setCurrency(e.target.value as string);
  };

  const renderedCurrencyOptions = () => {
    return CURRENCIES_LIST.map((currency) => {
      return (
        <MenuItem value={currency.id}>
          {currency.id.toUpperCase()}&nbsp;-&nbsp;{currency.name}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <IconButton
        className={classes.root}
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleSettingsClick}
      >
        <SettingsIcon />
      </IconButton>
      <Dialog
        fullWidth
        className={classes.dialog}
        open={open}
        onClose={handleSettingsClose}
        area-labelledby="settings"
      >
        <IconButton
          className={classes.closeButton}
          aria-controls="close-settings-menu"
          onClick={handleSettingsClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id="settings">Settings</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <FormGroup>
            <FormControl className={classes.formControl}>
              <div className={classes.controlSectionContainer}>
                <label htmlFor="theme-toggle">
                  <Typography variant="body1">Theme:</Typography>
                </label>
              </div>
              <div className={classes.controlSectionContainer}>
                <Brightness4Icon />
                <Switch
                  id="theme-toggle"
                  color="primary"
                  checked={!isDarkTheme}
                  onChange={handleThemeChange}
                  aria-label="toggle light theme"
                />
                <Brightness7Icon />
              </div>
            </FormControl>

            <FormControl className={classes.formControl}>
              <div className={classes.controlSectionContainer}>
                <label htmlFor="currency-select">
                  <Typography variant="body1">Currency:</Typography>
                </label>
              </div>
              <div className={classes.controlSectionContainer}>
                <Select
                  id="currency-select"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  variant="outlined"
                >
                  {renderedCurrencyOptions()}
                </Select>
              </div>
            </FormControl>
          </FormGroup>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavSettings;
