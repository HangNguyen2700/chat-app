import React from 'react';
import { Friend, SearchBar } from '../../components';

import { List, Divider } from '@mui/material';

export const FriendsbarExpand = () => {
  return (
    <List>
      <SearchBar />
      <Friend img="/broken-image.jpg" name="Hang Nguyen Nguyen" text="lorem ipsum dolor..." />
      <Friend img="/broken-image.jpg" name="Hang Nguyen Nguyen" text="lorem ipsum dolor..." />
      <Friend img="/broken-image.jpg" name="Hang Nguyen Nguyen" text="lorem ipsum dolor..." />
    </List>
  );
};
