import React from 'react';
import signInBtnStyle from './style.js';
import {Button} from '@mui/material';

const SubmitBtn = (props) => {
  return (
    <Button href="#" variant="contained" style={signInBtnStyle}>{props.text}</Button>
  );
}

export default SubmitBtn;