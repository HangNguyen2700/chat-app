import React from 'react';
import searchBarStyle from './style';
import { TextField, InputAdornment, FormControl, OutlinedInput, FormHelperText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  //return <TextField id="outlined-basic" placeholder="Search" variant="outlined" style={searchBarStyle} />;
  return (
    <FormControl sx={{ m: 1, width: '95%' }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        style={searchBarStyle}
        placeholder="Search"
        // value={values.weight}
        // onChange={handleChange('weight')}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon style={{ color: '#fff' }} />
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
    </FormControl>
  );
};
