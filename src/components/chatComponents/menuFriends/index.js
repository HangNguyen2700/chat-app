import React from 'react';
import Friend from '../friend/index';

import {Grid, Avatar} from '@mui/material'

const MenuFriends = (props) => {
  return(
    <Grid container>
      <Avatar alt="Remy Sharp" src={props.img} />
      
    </Grid>
  );
}

export default MenuFriends;