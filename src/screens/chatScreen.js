import React from 'react';
import { ChatHeader, FriendsbarExpand, ChattingFriendHeader } from '../layouts';

import { Grid } from '@mui/material';

const ChatScreen = () => {
  return (
    <Grid container>
      <Grid item>
        <ChatHeader img="/broken-image.jpg" name="Hung Vinh Dang" />
      </Grid>

      <Grid container item>
        <Grid container item xs={4} style={{ minHeight: '100vh' }}>
          <FriendsbarExpand />
        </Grid>

        <Grid container item xs={8} alignContent="flex-start">
          <ChattingFriendHeader img="/broken-image.jpg" name="Hang Nguyen Nguyen" />
          <Grid></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatScreen;
