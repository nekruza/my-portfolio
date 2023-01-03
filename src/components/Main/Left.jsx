import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Left(props) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'fixed', left: 40, bottom: 10, color: '#8892b0'
        }}>
            <a href='https://www.linkedin.com/in/navgani/'><LinkedInIcon style={{ margin: '10px 0px', color: '#8892b0' }} /></a>
            <a href='https://github.com/nekruza'><GitHubIcon style={{ margin: '10px 0px', color: '#8892b0' }} /></a>
            <a href='https://www.instagram.com/nyavgani/'><InstagramIcon style={{ margin: '10px 0px', color: '#8892b0' }} /></a>
            <div style={{ height: 100, width: 1, background: '#8892b0', marginTop: 10, color: '#8892b0' }}></div>
        </div>
    );
}

export default Left;