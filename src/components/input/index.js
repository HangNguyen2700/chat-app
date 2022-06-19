import React from 'react';
import {TextField, InputAdornment} from '@mui/material';
import inputStyle from './style';

const Input = (props) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={props.placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            {props.icon}
          </InputAdornment>
        ),
      }}
      variant="standard"
      style={inputStyle}
    />
  );
}

export default Input;