import React from 'react';
import { Image, Header } from '../layouts';
import { GoogleBtn, Input, SubmitButton, Linking } from '../components';

import { Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SignUpScreen = () => {
  const paperStyle = {
    height: '80vh',
    width: '30vw',
    borderRadius: 30,
    backgroundColor: '#031e3a',
    color: '#ffff',
  };

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Image />

      <Grid container item xs={12} sm={6} justifyContent="center" alignItems="center">
        <Paper elevation={10} style={paperStyle}>
          <Header text="Sign Up" />

          <Grid
            container
            direction="column"
            alignContent="space-between"
            style={{ display: 'flex', flexDirection: 'column' }}
            alignItems="center"
          >
            <GoogleBtn />

            <p>OR</p>

            <Input icon={<EmailIcon style={{ color: '#ffff' }} />} placeholder="Email" />
            <Input icon={<VisibilityIcon style={{ color: '#ffff' }} />} placeholder="Password" />
            <Input icon={<AccountCircleIcon style={{ color: '#ffff' }} />} placeholder="Username" />

            <SubmitButton text="Sign Up" />

            <Linking text="Already have an Account?" label="Sign In" />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUpScreen;
