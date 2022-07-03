import React from 'react';
import searchBarStyle from './style';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return <TextField id="outlined-basic" placeholder="Search" variant="outlined" style={searchBarStyle} />;
};
