import React from 'react';
import './style.css'


function Skillset(props) {
    return (
        <div
            style={{
                overflow: 'hidden',
                padding: '20px 10px',
            }}
        >
            <div id="scroll-text" style={{ color: 'rgb(168, 178, 209)', fontSize: 24, fontWeight: 600, width: '100%', display: 'flex' }}>
                {data.map(skill => (
                    <span style={{ marginRight: 40, marginBottom: 10, width: '100%' }}>{skill}</span>

                ))}
            </div>

        </div>
    );
}

export default Skillset;


const data = ['TypeScript',
    'JavaScript',
    'React',
    'Redux',
    'Zustand',
    'MaterialUI',
    'Azure',
    'Netlify',
    'SCSS',
    'HTML',
    'CSS']