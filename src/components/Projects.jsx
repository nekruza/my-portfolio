import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyProjects from './MyProjects';
import './style/style.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box id="project" sx={{ width: '100%', marginTop: 20, marginBottom: 20 }}>
            <p style={{ fontSize: 32, fontWeight: 600, margin: '10px', color: '#ccd6f6', marginBottom: '50xp' }}>Projects</p>
            <Box sx={{ borderBottom: 10, }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ margin: '10px 10px 0px', textAlign: 'start', }}>
                    {data.map((txt, index) => (
                        <Tab label={txt.name} {...a11yProps(index)} style={{ padding: '5px', marginRight: 20 }} />
                    ))}
                </Tabs>
            </Box>
            {data.map((txt, index) => (
                <TabPanel value={value}
                    index={index}
                    style={{
                        color: 'white', border: '1px solid rgb(136, 146, 176)',
                        borderRadius: 5, margin: '0px 10px',
                        background: 'black',
                    }}>
                    <MyProjects txt={txt} index={index} />
                </TabPanel>
            ))}
        </Box>
    );
}




const data = [
    {
        name: 'AI MovieHub',
        text: 'AI-MovieHub is a movie platform with AI functionality that lets users find movies through the intelligent voice assistant',
        color: 'white',
        titleColor: '#ad1f1f',
        background: '#3e0100',
        stack: 'React, JavaScript, Alan AI, useQuery, Zustand',
        linkSite: 'https://ai-moviehub.netlify.app/',
        linkGithub: 'https://github.com/nekruza/ai-moviehub',
        photo: require('./images/ai-movie.png')
    },
    // {
    //     name: 'Social Gratitude',
    //     text: 'Social Gratitude is a social media platform that encourages users to be grateful for each other by sharing dedicated gratitude posts and reminding them about upcoming calls to their loved ones',
    //     color: 'white',
    //     stack: 'ReactJS, MongoDB, Mangoose, NodeJs, ExpressJS, Axios, REST API',
    //     linkSite: 'https://social-gratitude.netlify.app/',
    //     linkGithub: 'https://github.com/Alice-Nekruz/social-gratitude-client',
    //     photo: require('./images/social_gratitude.jpeg')

    // },
    {
        name: 'Plantin',
        text: 'Plantin is a website where users can read how to take care of their plants, add new plants to the website, check the weather in their city, and create a list of their favorite plants',
        color: 'white',
        titleColor: '#498370',
        background: '#013323',
        stack: 'JavaScript, MongoDB, Mangoose, NodeJs, ExpressJS, Weather API Integration',
        linkSite: 'https://plantin.herokuapp.com/',
        linkGithub: 'https://github.com/Nekruz-Dominika/Full-Stack-Web-App',
        photo: require('./images/plantin.jpeg')
    },
    {
        name: 'MessageX',
        text: 'A responsive messaging app that allows users to exchange messages in real-time across different devices and screen sizes',
        titleColor: '#6c3bdd',
        background: '#6c3bdd',
        stack: 'React, JavaScript, Redux, SCSS',
        linkSite: 'https://messagex.netlify.app/',
        linkGithub: 'https://github.com/nekruza/message-x',
        photo: require('./images/messageX.png')
    },
    {
        name: 'Marvel: Infinity War',
        text: 'In this game, a user can choose various Marvel characters with different functionalities like shooting to fight with Thanos',
        color: 'white',
        titleColor: '#1976d2',
        background: '#001b34',
        stack: 'HTML, CSS, JavaScript',
        linkSite: 'https://nekruza.github.io/the-best-game-ever-/captain/captain.html',
        linkGithub: 'https://github.com/nekruza/the-best-game-ever-',
        photo: require('./images/marvel_game.jpeg')
    },

]