import React from 'react';
import chatHeaderStyle from './style';
import { Grid, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

export const ChatHeader = (props) => {
  return (
    <Grid container style={chatHeaderStyle}>
      <MenuIcon fontSize="large" style={{ color: '#fff' }} />
      <Typography variant="h4" color="#fff">
        Chat Web
      </Typography>
      <Grid display="flex" flexDirection="row" alignItems="center" alignContent="space-between">
        <Avatar src={props.img} />
        <Typography variant="h5" color="#fff">
          {props.name}
        </Typography>
        <SettingsIcon fontSize="large" style={{ color: '#fff' }} />
      </Grid>
    </Grid>
  );
};
