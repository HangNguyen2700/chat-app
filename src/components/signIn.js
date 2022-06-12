import React from 'react';
import './style.css';
import { Grid, Paper, TextField, Button, FormControlLabel, Checkbox, Typography, Link, InputAdornment } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import GoogleButton from 'react-google-button';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignIn = () => {

    const paperStyle = {
        height: '80vh',
        width: '30vw',
        borderRadius: 30,
        backgroundColor: '#031e3a',
        color: '#ffff'
    };
    const headerStyle = {
        backgroundColor: '#2DD2B3',
        padding: 30,
        fontSize: '60px',
        fontWeight: 'bold',
        color: '#031e3a',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    };
    const ggBtnStyle = {
        margin: 40,
        paddingRight: 15,
        paddingLeft: 10,
        width: '80%',
        borderRadius: 10,
        fontSize: '25px',
        color: 'black'
    };
    const inputStyle = {
        width: '80%',
        marginTop: 20,
        fontSize: '25px',
        //color: '#ffff',
        //backgroundColor: '#ffff'
    }; //k doi dc color
    const signInBtnStyle = {
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: '#2DD2B3',
        width: '80%',
        borderRadius: 10,
        fontSize: '25px',
        textTransform: 'none'
    };

    return (
        <Grid container style={{ minHeight: "100vh" }}>

            <Grid item xs={12} sm={6}>
                <img src={"https://web-static.wrike.com/cdn-cgi/image/width=880,format=auto,q=80/blog/content/uploads/2020/03/Global-Project-Management.jpg?av=15ec480845adf18b79dea8f75a80bd72"}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt="All about connection"
                />
            </Grid>

            <Grid container item xs={12} sm={6} justifyContent="center" alignItems="center" >
                <Paper elevation={10} style={paperStyle}>
                    <Grid container style={headerStyle} justifyContent="center" alignItems="center">
                        Sign In
                    </Grid>

                    <Grid container style={{ display: "flex", flexDirection: "column" }} alignItems="center">
                        <GoogleButton
                            type="light"
                            label="Continue with Google"
                            onClick={() => { console.log('Google button clicked') }}
                            style={ggBtnStyle}
                        />

                        <p>OR</p>

                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <EmailIcon style={{ color: '#ffff' }}/>
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            style={inputStyle}
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <VisibilityIcon style={{ color: '#ffff' }}/>
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            style={inputStyle}
                        />

                        <Grid container style={{ display: "flex", flexDirection: "row", marginTop: 10 }} justifyContent="space-around" alignItems="center">
                            <FormControlLabel control={<Checkbox defaultChecked style={{ color: '#2DD2B3' }} />} label="Remember me" />
                            <Typography>
                                <Link href='#' underline="none" color='#2DD2B3'>Forgot password?</Link>
                            </Typography>
                        </Grid>

                        <Button href="#" variant="contained" style={signInBtnStyle}>Sign In</Button>
                        <Typography> Don't have an Account?
                            <Link href='#' underline="none" color='#2DD2B3'> Sign Up</Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SignIn;