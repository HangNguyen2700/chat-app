import React from 'react';
import { ChatHeader, FriendsbarExpand } from '../layouts';

import { Grid } from '@mui/material';

const ChatScreen = () => {
  return (
    <Grid container>
      <Grid item>
        <ChatHeader img="/broken-image.jpg" name="Hung Vinh Dang" />
      </Grid>

      <Grid container item>
        <Grid item>
          <FriendsbarExpand />
        </Grid>

        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default ChatScreen;
