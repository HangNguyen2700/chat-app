import React from 'react';
import Image from '../components/image/index.js';
import Header from '../components/header/index.js';
import GoogleBtn from '../components/googleBtn/index.js';
import Input from '../components/input/index.js';
import SubmitBtn from '../components/submitBtn/index.js';
import Linking from '../components/linking/index.js';

import { Grid, Paper, TextField, Button, FormControlLabel, Checkbox, Typography, Link, InputAdornment } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignInScreen = () => {

    const paperStyle = {
        height: '80vh',
        width: '30vw',
        borderRadius: 30,
        backgroundColor: '#031e3a',
        color: '#ffff'
    };

    return (
        <Grid container style={{ minHeight: "100vh" }}>
            <Image/>

            <Grid container item xs={12} sm={6} justifyContent="center" alignItems="center" >
                <Paper elevation={10} style={paperStyle}>
                    <Header text='Sign In'/>

                    <Grid container style={{ display: "flex", flexDirection: "column" }} alignItems="center">
                       <GoogleBtn/>

                        <p>OR</p>

                        <Input icon={<EmailIcon style={{ color: '#ffff' }}/>}
                                placeholder="Email"/>
                        <Input icon={<VisibilityIcon style={{ color: '#ffff' }}/>}
                                placeholder="Password"/>

                        <Grid container style={{ display: "flex", flexDirection: "row", marginTop: 10 }} justifyContent="space-around" alignItems="center">
                            <FormControlLabel control={<Checkbox defaultChecked style={{ color: '#2DD2B3' }} />} label="Remember me" />
                            <Typography>
                                <Link href='#' underline="none" color='#2DD2B3'>Forgot password?</Link>
                            </Typography>
                        </Grid>

                        <SubmitBtn text="Sign In"/>

                        <Linking text="Don't have an Account?" label="Sign Up"/>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SignInScreen;