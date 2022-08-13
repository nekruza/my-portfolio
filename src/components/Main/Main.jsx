import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import image from '../images/avatar.png'
import resume from './NA_Resume.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import '../style/style.css'

function Main() {


    return (
        <Box id="main" sx={{ minHeight: '70vh', paddingLeft: 1, paddingRight: 1, paddingTop: 15, color: '#64ffda' }}>
            <Grid container style={{ margin: '50px auto', height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Grid item xs={12} style={{ background: 'black', zIndex: 2, padding: 10 }} >
                    <p>Hi, my name is </p>
                    <p style={{ color: '#e6f1ff', fontSize: 67, fontWeight: 600, marginTop: 10 }}>Nekruz Avgani</p>
                    <p style={{ color: '#a8b2d1', fontSize: 55, fontWeight: 600, }}>I turn ideas into reality!</p>
                    <p style={{ color: '#8892b0', marginBottom: 30, marginTop: 20 }}>
                        I’m a software engineer specialized in Javascript and the MERN (MongoDB, Express, React & Node.js).
                    </p>
                    <Grid style={{ marginBottom: 7 }}>
                        <a href='https://www.linkedin.com/in/navgani/'><LinkedInIcon style={{ margin: '10px 10px 10px 0px', width: 50, height: 50 }} /></a>
                        <a href='https://github.com/nekruza'><GitHubIcon style={{ margin: '10px 10px 10px 0px', width: 50, height: 50 }} /></a>
                    </Grid>
                    <a href={resume} download style={{ textDecoration: 'none' }}>
                        <Button className='button' variant='outlined'>
                            Download Resume
                        </Button>
                    </a>
                </Grid>
                {/* <img src={image} width='400px' height="300px" alt="" style={{ position: 'absolute', right: 120, top: 120, zIndex: 1 }} /> */}
            </Grid>
        </Box>
    );
}

export default Main;