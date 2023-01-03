import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/About/AboutMe';
import Left from './components/Main/Left';
import Main from './components/Main/Main';
import MyProjects from './components/MyProjects';
import Navbar from './components/Navbar';
import Right from './components/Main/Right';
import Contact from './components/Contact';
import ParticlesComponent from './components/Particles';
import { Grid } from '@mui/material';
import Projects from './components/Projects';

function App() {

  const [opacity, setOpacity] = React.useState(0.22)
  const [bgcolor, setBgColor] = React.useState(false)

  return (
    <div style={{ background: '#040718' }}>
      <Navbar bg={bgcolor} setBgColor={setBgColor} />
      {/* <ParticlesComponent opacity={opacity} /> */}
      <Grid container sx={{ display: 'flex', maxWidth: 1200, margin: 'auto' }}>
        <Grid item xs={1} sx={{ display: { xs: 'none', sm: 'inherit' } }}>
          <Left />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Main />
          <AboutMe />
          <Projects />
          {/* <MyProjects /> */}
          <Contact />
        </Grid>
        <Grid item xs={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {/* <Right setOpacity={setOpacity} /> */}
        </Grid>
      </Grid>




      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="invoices" element={<AboutMe />} />
      </Routes> */}
    </div>
  );
}

export default App;

// black #0c0f0a