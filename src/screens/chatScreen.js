import React from 'react';
import { ChatHeader, FriendsbarExpand, ChattingFriendHeader } from '../layouts';

import { Grid } from '@mui/material';

const ChatScreen = () => {
  return (
    <Grid container height="100vh">
      <Grid item style={{ borderBottom: '1px solid #fff' }}>
        <ChatHeader img="/broken-image.jpg" name="Hung Vinh Dang" />
      </Grid>

      <Grid container item style={{ height: '92%' }}>
        <Grid container item xs={3} style={{ borderRight: '1px solid #fff' }}>
          <FriendsbarExpand />
        </Grid>

        <Grid container item xs={9} alignContent="flex-start">
          <ChattingFriendHeader img="/broken-image.jpg" name="Hang Nguyen Nguyen" />
          <Grid></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatScreen;
