import React from 'react';
import { Typography, Link } from '@mui/material';

export const Linking = (props) => {
  return (
    <Typography>
      {' '}
      {props.text}
      <Link href="#" underline="none" color="#2DD2B3" fontWeight="bold">
        {' '}
        {props.label}
      </Link>
    </Typography>
  );
};
