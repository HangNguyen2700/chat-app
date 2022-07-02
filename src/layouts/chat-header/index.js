import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

export const ChatHeader = (props) => {
  return (
    <Grid container>
      <MenuIcon fontSize="large" />
      <Typography variant="h4" color="#fff">
        Chat Web
      </Typography>
      <Avatar alt="Remy Sharp" src={props.img} />
      <Typography variant="h5" color="#fff">
        {props.name}
      </Typography>
      <SettingsIcon fontSize="large" />
    </Grid>
  );
};
