import React from 'react';
import { ChatHeader } from '../layouts';

import { Grid } from '@mui/material';

const ChatScreen = () => {
  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid item>
        <ChatHeader img="https://material-ui.com/static/images/avatar/1.jpg" name="Hung Vinh Dang" />
      </Grid>

      <Grid>
        <Grid></Grid>

        <Grid></Grid>
      </Grid>
    </Grid>
  );
};

export default ChatScreen;
