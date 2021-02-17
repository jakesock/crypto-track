import { TextField } from '@material-ui/core';

import { useCoinSearch } from '../../hooks/useCoinSearch';

const SearchBar: React.FC = () => {
  const [term, setTerm] = useCoinSearch('', 500);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="Search"
        fullWidth
        value={term}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
