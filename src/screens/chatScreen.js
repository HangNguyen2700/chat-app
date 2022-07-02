import React from 'react';
import MenuBar from '../components/chatComponents/menuBar/index.js';
import MenuFriends from '../components/chatComponents/menuFriends/index';

import { Grid} from '@mui/material';

const ChatScreen = () => {
  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item>
        <MenuBar img="https://material-ui.com/static/images/avatar/1.jpg" name="Hung Vinh Dang"/>
      </Grid>
    </Grid>
  );
}

export default ChatScreen;