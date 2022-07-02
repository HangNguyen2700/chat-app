import React from 'react';
import { Grid } from '@mui/material';
import headerStyle from './style';

export const Header = (props) => {
  return (
    <Grid container style={headerStyle} justifyContent="center" alignItems="center">
      {props.text}
    </Grid>
  );
};
