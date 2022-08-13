import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';


function Contact(props) {

    return (
        <div style={{ padding: '80px 0px 50px', color: '#64ffda' }}>
            <div id='contacts' style={{ width: '70%', margin: '0px auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <a href="mailto:nekruz.avgani@gmail.com" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" style={{ fontSize: 32, fontWeight: 600, marginTop: 10, color: '#ccd6f6', borderColor: '#ccd6f6', }}>
                            Get In Touch
                        </Button>
                    </a>
                    <p style={{ fontSize: 16, margin: 20, color: '#ccd6f6', textAlign: 'center', lineHeight: 1.5 }}>Feel free to get in touch! Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <Box >
                        <List >
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="nekruz.avgani@gmail.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary="+44 7708582724" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary="London, UK" />
                            </ListItem>
                        </List>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;
