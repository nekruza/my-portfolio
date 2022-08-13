import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Right({ setOpacity }) {
    function preventHorizontalKeyboardNavigation(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
        }
        setOpacity(event.key.value)
    }
    return (
        <div>
            <div style={{
                display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'fixed', right: 40, bottom: 10,
            }}>
                <Box sx={{ height: 200, }}>
                    <Slider
                        sx={{
                            '& input[type="range"]': {
                                WebkitAppearance: 'slider-vertical',
                            },
                            color: '#64ffda',
                        }}
                        size="small"
                        orientation="vertical"
                        defaultValue={20}
                        aria-label="Temperature"
                        valueLabelDisplay="auto"
                        onKeyDown={preventHorizontalKeyboardNavigation}
                        onChange={(e) => setOpacity((e.target.value / 100))}
                    />
                </Box>
            </div>
        </div>
    );
}

export default Right;


