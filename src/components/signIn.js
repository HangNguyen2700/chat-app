import React from 'react';
import {Grid, Paper, TextField, Button, FormControlLabel, Checkbox, Typography, Link} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const SignIn=()=>{

    
    const paperStyle={height:'80vh', width:'30vw'};
    const headerStyle={backgroundColor:'#2DD2B3', fontSize:'50px', padding:40};

    return(
        <Grid container style={{minHeight:"100vh"}}>

            <Grid item xs={12} sm={6}>
                <img src={"https://web-static.wrike.com/cdn-cgi/image/width=880,format=auto,q=80/blog/content/uploads/2020/03/Global-Project-Management.jpg?av=15ec480845adf18b79dea8f75a80bd72"}
                    style={{width:"100%", height:"100%", objectFit:"cover"}}
                    alt="All about connection"
                />
            </Grid>

            <Grid container item xs={12} sm={6} justifyContent="center" alignItems="center" >
                <Paper elevation={10} style={paperStyle}>
                    <Grid style={headerStyle}>
                        Sign In
                    </Grid>

                    <Grid style={{display:"flex", flexDirection:"column"}}>
                        <Button variant="outlined">Outlined</Button>
                        <p>OR</p>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />

                        <Grid>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            <Typography>
                                <Link href='#'>Forgot password?</Link>
                            </Typography>
                        </Grid>

                        <Button variant="contained">Sign In</Button>
                        <Typography> Don't have an Account? 
                            <Link href='#'>Sign Up</Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SignIn;