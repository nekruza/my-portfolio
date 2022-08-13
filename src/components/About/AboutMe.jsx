import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MyAvatar from './MyAvatar';
import { Grid } from '@mui/material';

function AboutMe(props) {

    return (
        <div id="about" style={{ color: '#64ffda', margin: '50px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
            <Grid container p={1}>
                <p style={{ fontSize: 32, fontWeight: 600, margin: 10, color: '#ccd6f6' }}>About me</p>
                <Grid item xs={12} style={{ padding: '10px 16px', }}>
                    <Grid container spacing={2} >
                        <Grid xs={12} sm={7} style={{ padding: 10, background: 'black', zIndex: 99, }}>
                            {data.map((txt) => (
                                <p style={{ color: txt.color, fontSize: 15, marginBottom: 10, marginTop: 10, lineHeight: 1.5 }}>{txt.text}</p>
                            ))}
                        </Grid>
                        <Grid xs={12} sm={5} style={{ display: 'flex', justifyContent: 'space-around', padding: 10 }}>
                            <div style={{ width: 220, height: 220 }}>
                                <MyAvatar />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ maxWidth: '100%', marginTop: 50, padding: 10 }}>
                    <p style={{ fontSize: 18, fontWeight: 600, marginTop: 10, color: '#A548FF' }}>Key Skills</p>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', flexDirection: 'column', }}>
                        {dataSkills.map((txt, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', zIndex: 99, background: 'black' }}>
                                <p style={{ color: '#ccd6f6', fontSize: 15, marginBottom: 10, marginTop: 10, lineHeight: 1.5, width: 100 }}>{txt.text}</p>
                                <Box width="90%" style={{ display: 'flex', alignItems: 'center', marginLeft: 20, }}>
                                    <Slider
                                        style={{ color: txt.color }}
                                        size="small"
                                        color={txt.color}
                                        defaultValue={txt.value}
                                        aria-label="Small"
                                        valueLabelDisplay="auto"
                                        disabled
                                    />
                                </Box>
                            </div>

                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutMe;


const data = [
    {
        text: 'Hello! My name is Nekruz. I am a fast learner who likes to be challenged and work on tight schedules. I also enjoy developing solutions to complex problems and building projects that positively impact the world.',
        color: '#8892b0'
    },
    {
        text: 'In my free time, I enjoy playing football, traveling, and reading books.',
        color: '#8892b0'
    },
    {
        text: 'Below you can find my skillset:',
        color: '#8892b0'
    },
]

const dataSkills = [
    {
        text: 'ReactJS',
        value: 90,
        color: 'primary',
    },
    {
        text: 'JavaScript',
        value: 90,
        color: 'primary',

    },
    {
        text: 'TypeScript',
        value: 70,
        color: 'secondary',

    },
    {
        text: 'NodeJS',
        value: 60,
        color: 'secondary',

    },
    {
        text: 'MongoDB ',
        value: 50,
        color: 'success',
    },
]