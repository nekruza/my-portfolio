import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



function ParticlesComponent({ opacity }) {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = {
        background: {
            color: "black",
            margin: 0,
            padding: 0,
            position: 'unset'
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 100,
                    duration: 20,
                    opacity: opacity,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 100,
                    duration: 1.4
                }
            }
        },
        particles: {
            color: {
                value: "#A548FF"
            },
            links: {
                color: "#c588ff",
                distance: 200,
                enable: true,
                opacity: opacity,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.3,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 1500
                },
                value: 80
            },
            opacity: {
                value: opacity
            },
            shape: {
                type: "circle"
            },
            size: {
                random: true,
                value: 5
            }
        }
    };
    return (
        <div>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
        </div>
    );
}

export default ParticlesComponent;