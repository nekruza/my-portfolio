import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Left(props) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'fixed', left: 40, bottom: 10, color: '#64ffda'
        }}>
            <a href='https://www.linkedin.com/in/navgani/'><LinkedInIcon style={{ margin: '10px 0px', }} /></a>
            <a href='https://github.com/nekruza'><GitHubIcon style={{ margin: '10px 0px', }} /></a>
            <a href='https://www.instagram.com/nyavgani/'><InstagramIcon style={{ margin: '10px 0px', }} /></a>
            <div style={{ height: 100, width: 1, background: '#A548FF', marginTop: 10 }}></div>
        </div>
    );
}

export default Left;