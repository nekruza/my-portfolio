import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import image from '../images/avatar.png'
import ts from '../images/typescript.svg'
import js from '../images/javascript.svg'
import react from '../images/react.svg'
import resume from './Resume/NekruzAvgani_Resume.pdf'
import '../style/style.css'



function Main() {

    return (
        <Box id="main" sx={{ minHeight: '70vh', paddingLeft: 1, paddingRight: 1, marginTop: 10, paddingTop: 25, color: '#0095F6' }}>
            <Grid container style={{ margin: '50px auto', height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Grid item xs={10} style={{ zIndex: 2, padding: 10 }} >
                    <p>Hi, my name is </p>
                    <p style={{ color: '#e6f1ff', fontSize: 67, fontWeight: 600, marginTop: 10 }}>Nekruz Avgani</p>
                    <p style={{ color: '#a8b2d1', fontSize: 55, fontWeight: 600, }}>I turn ideas into reality!</p>
                    <p style={{ color: '#8892b0', marginBottom: 30, marginTop: 20 }}>
                        I’m a Front End Developer specialized in JavaScript, TypeScript and ReactJS.
                    </p>
                    <Grid style={{ marginBottom: 15, height: 70, display: 'flex', alignItems: 'center' }}>
                        <img src={react} width='50px' alt="" style={{ marginRight: 15 }} />
                        <img src={js} width='48px' alt="" style={{ marginRight: 15 }} />
                        <img src={ts} width='50px' alt="" />
                    </Grid>
                    <a href={resume} download style={{ textDecoration: 'none' }}>
                        <Button className='button' variant='outlined' style={{ color: 'white' }}>
                            Download Resume
                        </Button>
                    </a>
                </Grid>
                <Grid sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <img src={image} width='400px' height="300px" alt="" style={{ position: 'absolute', right: 120, top: 120, zIndex: 1000 }} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Main;