import * as React from 'react';
import { styled } from '@mui/material/styles';
import '../style/style.css'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import photo1 from '../images/myAvatar.jpeg'
import photo2 from '../images/myPhoto.png'
import photo3 from '../images/myPhoto2.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


export default function MyAvatar() {
    const [pic, setPic] = React.useState(false)

    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Avatar
                // className='border'
                alt="Nekruz"
                src={pic ? photo2 : photo1}
                style={{ width: 220, height: 220, border: '2px solid #44b700' }}
                onMouseEnter={() => setPic(true)}
                onMouseLeave={() => setPic(false)}
            />
        </StyledBadge>
    );
}
