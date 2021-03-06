import { Paper, Input, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import { useActions } from '../../hooks/useActions';
import { useCoinSearch } from '../../hooks/useCoinSearch';
import { useStyles } from './styles';

const SearchBar: React.FC = () => {
  const [term, setTerm] = useCoinSearch('', 500);
  const classes = useStyles();

  const { clearSearch } = useActions();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleClear = () => {
    setTerm('');
    clearSearch();
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.searchContainer}>
        <Input
          className={classes.input}
          value={term}
          onChange={handleOnChange}
          placeholder="BTC, Ethereum, Doge, etc."
          fullWidth
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <IconButton
        className={`${classes.iconButton} ${
          term === '' && classes.iconButtonHidden
        }`}
        onClick={handleClear}
      >
        <ClearIcon className={classes.icon} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
