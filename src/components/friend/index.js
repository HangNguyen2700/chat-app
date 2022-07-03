import React from 'react';
import { Grid, Avatar, Typography, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export const Friend = (props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={props.img} />
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={props.text} />
    </ListItem>
  );
};
