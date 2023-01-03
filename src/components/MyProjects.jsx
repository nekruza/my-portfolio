import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Button, Grid } from '@mui/material';
import './style/style.css'

function MyProjects({ txt, index }) {

    return (
        <Box
            sx={{
                padding: 1, color: '#64ffda',
                maxWidth: 900, margin: '10px auto',
                height: '450px', display: 'flex'
            }}
        >
            <Grid key={index} container style={{ display: 'flex', position: 'relative', zIndex: 99, width: '100%', alignItems: 'center', margin: "20px 0px", justifyContent: 'space-between' }}>
                <Grid item sm={6} xs={12} style={{ zIndex: 99, maxWidth: 360, padding: 15, }}>
                    <p style={{ fontSize: 13, fontWeight: 500, marginTop: 10, color: txt.titleColor }}>Project {index + 1}</p>
                    <p style={{ fontSize: 27, fontWeight: 600, marginTop: 10, color: '#ccd6f6' }}>{txt.name}</p>
                    <p style={{ color: 'rgba(270, 270, 270, 0.8)', fontSize: 15, marginBottom: 10, marginTop: 10, padding: 25, lineHeight: 1.5, background: txt.background }}>{txt.text}</p>
                    <p style={{ fontSize: 13, marginBottom: 10, marginTop: 10, color: '#8892b0', lineHeight: 1.5 }}> <strong>Tech Stack:</strong> {txt.stack}</p>
                    <a href={txt.linkGithub} style={{ textDecoration: 'none' }}>
                        <Button style={{ marginTop: 20, color: '#8892b0', border: '1px solid #8892b0', marginRight: '15px', textTransform: 'none' }}>
                            <GitHubIcon style={{ marginRight: 6, width: 20, }} />Github
                        </Button>
                    </a>
                    <a href={txt.linkSite} style={{ textDecoration: 'none', color: '#8892b0' }}>
                        <Button style={{ marginTop: 20, color: '#8892b0', border: '1px solid #8892b0', textTransform: 'none' }}>
                            <LaunchIcon style={{ marginRight: 6, width: 20 }} /> Website
                        </Button>
                    </a>
                </Grid>
                <img
                    src={txt.photo}
                    style={{
                        width: '100%', maxWidth: 600,
                        bjectFit: 'cover', zIndex: 0,
                        position: 'absolute',
                        right: 10,
                    }}
                    alt="website"
                />
            </Grid>
        </Box>
    );
}

export default MyProjects;


