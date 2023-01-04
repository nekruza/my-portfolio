import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MyAvatar from './MyAvatar';
import { Grid } from '@mui/material';
import Skillset from './Skillset';

function AboutMe(props) {

    return (
        <div id="about" style={{ color: '#64ffda', margin: '50px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', }}>
            <Grid container p={1}>
                <p style={{ fontSize: 32, fontWeight: 600, margin: 10, color: '#ccd6f6' }}>About me</p>
                <Grid item xs={12} style={{ padding: '10px 16px', }}>
                    <Grid container spacing={2} >
                        <Grid xs={12} sm={7} style={{ padding: 10, }}>
                            {data.map((txt) => (
                                <p style={{ color: txt.color, fontSize: 15, marginBottom: 10, marginTop: 10, lineHeight: 1.5 }}>{txt.text}</p>
                            ))}
                        </Grid>
                        <Grid xs={12} sm={5} style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 10px' }}>
                            <div style={{ width: 220, height: 220 }}>
                                <MyAvatar />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ maxWidth: '100%', marginTop: 50, padding: 10 }}>
                    <p style={{ fontSize: 18, fontWeight: 600, marginTop: 10, color: '#0095F6', marginBottom: 15 }}>Key Skills</p>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', flexDirection: 'column', }}>
                        {dataSkills.map((txt, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', }}>
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
                <Grid item xs={12} style={{ maxWidth: '100%', marginTop: 50, padding: 10 }}>
                    <Skillset />
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutMe;


const data = [
    {
        text: `I have always been fascinated by the power of technology to bring people and ideas together, and this passion has driven me to pursue a career in frontend development. I also enjoy developing solutions to complex problems and building projects that positively impact the world. `,
        color: '#8892b0'
    },
    {
        text: 'In my current role as a frontend developer at Education AI, I have had the opportunity to work on some truly innovative projects and have gained valuable experience in ReactJS and JavaScript technologies.',
        color: '#8892b0'
    },
    {
        text: 'In my free time, I enjoy playing football, traveling, and reading books.',
        color: '#8892b0'
    },
]

const dataSkills = [
    {
        text: 'ReactJS',
        value: 92,
        color: 'primary',
    },
    {
        text: 'JavaScript',
        value: 90,
        color: 'primary',

    },
    {
        text: 'TypeScript',
        value: 85,
        color: 'secondary',

    },
    {
        text: 'Redux',
        value: 80,
        color: 'secondary',

    },
]