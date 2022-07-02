import React from 'react';
import submitButtonStyle from './style.js';
import { Button } from '@mui/material';

export const SubmitButton = (props) => {
  return (
    <Button href="#" variant="contained" style={submitButtonStyle}>
      {props.text}
    </Button>
  );
};
