// @ts-nocheck
import React from 'react';
import { Image, Header } from '../layouts';
import { GoogleBtn, Input, SubmitButton, Linking } from '../components';

import { Grid, Paper, FormControlLabel, Checkbox, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignInScreen = () => {
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
          <Header text="Sign In" />

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

            <Grid
              container
              style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}
              justifyContent="space-around"
              alignItems="center"
            >
              <FormControlLabel
                control={<Checkbox defaultChecked style={{ color: '#2DD2B3' }} />}
                label="Remember me"
              />
              <Typography>
                <Link href="#" underline="none" color="#2DD2B3">
                  Forgot password?
                </Link>
              </Typography>
            </Grid>

            <SubmitButton text="Sign In" />

            <Linking text="Don't have an Account?" label="Sign Up" />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignInScreen;
