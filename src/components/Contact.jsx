import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';

function Contact(props) {

    const year = new Date().getFullYear();

    return (
        <div style={{ padding: '80px 0px 50px', color: '#64ffda' }}>
            <div id='contacts' style={{ width: '70%', margin: '0px auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <a href="mailto:nekruz.avgani@gmail.com" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" style={{ fontSize: 32, fontWeight: 600, marginTop: 10, color: '#ccd6f6', borderColor: '#ccd6f6', }}>
                            Get In Touch
                        </Button>
                    </a>
                    <p style={{ fontSize: 16, margin: 20, color: '#ccd6f6', textAlign: 'center', lineHeight: 1.5 }}>
                        Thank you for visiting my portfolio website! If you have any questions or are interested in collaborating on a project, feel free to contact me.
                    </p>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}>
                    <Box >
                        <List >
                            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', marginBottom: 20, alignItems: 'center' }}>
                                <EmailIcon style={{ color: 'white', marginRight: 7, }} /> nekruz.avgani@gmail.com
                            </div>
                            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <LocationOnIcon style={{ color: 'white', marginRight: 7 }} /> London, UK
                            </div>
                        </List>
                    </Box>
                </div>
                <div style={{ color: 'rgb(136, 146, 176)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 11, marginTop: 50 }}>
                    {'\u00A9'} {year}. All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Contact;

