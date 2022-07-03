import React from 'react';
import friendsbarExpandStyle from './style';
import { Friend, SearchBar } from '../../components';

import { List, Divider, Grid } from '@mui/material';

export const FriendsbarExpand = () => {
  return (
    <List style={friendsbarExpandStyle}>
      <SearchBar />
      <Friend img="/broken-image.jpg" name="Hang Nguyen Nguyen" text="lorem ipsum dolor..." />
      <Friend img="/broken-image.jpg" name="Hang Nguyen Nguyen" text="lorem ipsum dolor..." />
      <Friend img="/broken-image.jpg" name="Hang Nguyen Nguyen" text="lorem ipsum dolor..." />
    </List>
  );
};
