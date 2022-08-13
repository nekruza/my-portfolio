import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Grid } from '@mui/material';
import './style/style.css'

function MyProjects(props) {

    return (
        <Box id="project" sx={{ padding: 1, color: '#64ffda', maxWidth: 900, margin: '50px auto', }}>
            {data.map((txt, index) => (
                <Grid key={index} container style={{ display: 'flex', zIndex: 99, width: '100%', alignItems: 'center', margin: "20px 0px", justifyContent: 'space-between' }}>
                    <Grid item sm={6} xs={12} style={{ zIndex: 99, maxWidth: 600, padding: 15, background: 'black' }}>
                        <p style={{ fontSize: 13, fontWeight: 500, marginTop: 10 }}>Project {index + 1}</p>
                        <p style={{ fontSize: 27, fontWeight: 600, marginTop: 10, color: '#ccd6f6' }}>{txt.name}</p>
                        <p style={{ color: txt.color, fontSize: 15, marginBottom: 10, marginTop: 10, padding: 25, lineHeight: 1.5, background: '#112240' }}>{txt.text}</p>
                        <p style={{ fontSize: 13, marginBottom: 10, marginTop: 10, color: '#8892b0', lineHeight: 1.5 }}> <strong>Tech Stack:</strong> {txt.stack}</p>
                        <a href={txt.linkGithub} style={{ textDecoration: 'none' }}>
                            <GitHubIcon style={{ marginLeft: 10, color: '#8892b0', }} />
                        </a>
                        <a href={txt.linkSite} style={{ textDecoration: 'none' }}>
                            <LaunchIcon style={{ marginLeft: 10, color: '#8892b0', }} />
                        </a>
                    </Grid>
                    <Grid item sm={6} xs={12} style={{ padding: 15, display: 'flex', zIndex: 99, justifyContent: 'space-around', alignItems: 'start' }}>
                        <a className="border" href={txt.linkSite} style={{ textDecoration: 'none', border: '1px solid white' }}>
                            <img src={txt.photo} style={{ width: '100%', maxHeight: 250, minHeight: 200, objectFit: 'cover' }} />
                        </a>
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
}

export default MyProjects;


const data = [
    {
        name: 'AI + MovieHub',
        text: 'Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
        color: '#8892b0',
        stack: 'React Styled Components Express Spotify API Heroku',
        linkSite: 'https://plantin.herokuapp.com/',
        linkGithub: 'https://github.com/Nekruz-Dominika/Full-Stack-Web-App',
        photo: require('./images/marvel_game.jpeg')
    },
    {
        name: 'Social Gratitude',
        text: 'Social Gratitude is a social media platform that encourages users to be grateful for each other by sharing dedicated gratitude posts and reminding them about upcoming calls to their loved ones',
        color: '#8892b0',
        stack: 'ReactJS, MongoDB, Mangoose, NodeJs, ExpressJS, Axios, REST API, GitHub',
        linkSite: 'https://social-gratitude.netlify.app/',
        linkGithub: 'https://github.com/Alice-Nekruz/social-gratitude-client',
        photo: require('./images/social_gratitude.jpeg')

    },
    {
        name: 'Plantin',
        text: 'Plantin is a website where users can read how to take care of their plants, add new plants to the website, check the weather in their city, and create a list of their favorite plants',
        color: '#8892b0',
        stack: 'HTML, CSS, JavaScript, MongoDB, Mangoose, NodeJs, ExpressJS, Weather API Integration, GitHub',
        linkSite: 'https://plantin.herokuapp.com/',
        linkGithub: 'https://github.com/Nekruz-Dominika/Full-Stack-Web-App',
        photo: require('./images/plantin.jpeg')
    },
    {
        name: 'Marvel: Infinity War',
        text: 'In this game, a user can choose various Marvel characters with different functionalities like shooting to fight with Thanos',
        color: '#8892b0',
        stack: 'HTML, CSS, JavaScript, GitHub',
        linkSite: 'https://plantin.herokuapp.com/',
        linkGithub: 'https://github.com/Nekruz-Dominika/Full-Stack-Web-App',
        photo: require('./images/marvel_game.jpeg')
    },

]