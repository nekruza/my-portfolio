import { Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import Switcher from './Switcher';
import { HashLink } from 'react-router-hash-link';
import './style/style.css'
import SegmentIcon from '@mui/icons-material/Segment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import logo from './images/logo.png'


function Navbar({ bg, setBgColor }) {
    const [display, setDisplay] = React.useState('none')

    return (
        <Box style={{ width: '100vw', display: 'flex', height: 70 }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'auto', color: '#64ffda', padding: 2 }}>
                <Grid>
                    <img src={logo} alt="logo" width={60} height={50} />
                </Grid>
                <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
                    <Grid sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <HashLink to='#about' smooth style={{ textDecoration: 'none' }}><p className='underline' style={{ padding: 15 }}>About</p></HashLink>
                        <HashLink to='#project' smooth style={{ textDecoration: 'none' }}><p className='underline' style={{ padding: 15 }}>Project</p></HashLink>
                        <HashLink to='#contacts' smooth style={{ textDecoration: 'none' }}><p className='underline' style={{ padding: 15 }}>Contact</p></HashLink>
                    </Grid>
                    {/* <Grid item onClick={() => setDisplay('none')} sx={{ padding: 1 }}>
                        <Switcher setBgColor={setBgColor} bg={bg} />
                    </Grid> */}
                    <IconButton sx={{
                        display: { xs: 'flex', sm: 'none' }
                    }}
                        onClick={() => setDisplay('flex')}
                    >
                        <SegmentIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Box container style={{ margin: '0px', background: 'black', border: '2px solid #A548FF', display: display, position: 'absolute', top: 10, flexDirection: 'column', zIndex: 99, width: '99vw', height: '100px', padding: "40px 0px" }}>
                <CloseIcon style={{ position: 'absolute', top: 10, right: 10, }} onClick={() => setDisplay('none')} />
                <Grid container style={{ display: 'flex', justifyContent: 'space-around', width: '100%', height: '100%', }}>
                    {data.map((item, index) => (
                        <Grid item xs={3} key={index} style={{ height: 100, borderRadius: '10%', background: '#03062f', padding: 10, border: '1px solid #A548FF' }} onClick={() => setDisplay('none')}>
                            <HashLink to={item.to} smooth style={{ textDecoration: 'none' }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} style={{ color: 'white' }} />
                            </HashLink>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Navbar;

const data = [

    {
        text: 'About me',
        icon: <AssignmentIndIcon style={{ marginRight: 10 }} />,
        to: '#about'
    },
    {
        text: 'Project',
        icon: <TerminalIcon style={{ marginRight: 10, color: 'white' }} />,
        to: '#project'
    },
    {
        text: 'Contacts',
        icon: <ContactMailIcon style={{ marginRight: 10 }} />,
        to: '#contacts'
    },

]