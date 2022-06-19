import React from 'react';
import {Grid} from '@mui/material';

const Image = () => {
  return (
    <Grid item xs={12} sm={6}>
      <img src={"https://web-static.wrike.com/cdn-cgi/image/width=880,format=auto,q=80/blog/content/uploads/2020/03/Global-Project-Management.jpg?av=15ec480845adf18b79dea8f75a80bd72"}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="All about connection"
      />
    </Grid>
  );
}

export default Image;