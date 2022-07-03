import React from 'react';
import chattingFriendHeaderStyle from './style';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export const ChattingFriendHeader = (props) => {
  return (
    <ListItem style={chattingFriendHeaderStyle}>
      <ListItemAvatar>
        <Avatar src={props.img} />
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary="Active 1 hour ago" />
    </ListItem>
  );
};
