import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../images/logo.jpg';
import { NavLink, Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';

const Navbar = () => {
  const [value, setValue] = useState();

  return (
    <AppBar sx={{ backgroundColor: 'black', position: 'sticky', top: 0, height: 75, zIndex: 1000 }}>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="Logo" width={85} style={{borderRadius:'100px'}}/>
        </Link>
        <Typography variant="h5" sx={{ color: 'white', marginLeft: 2 }}>
            Streamlining Student Support
        </Typography>
        <Tabs
          sx={{ ml: 'auto' }}
          textColor="color"
          color="white"
          value={value}
          onChange={(e, value) => setValue(value)}
          style={{ color: 'white' }}
        >
          <Tab LinkComponent={NavLink} to='/signin' label='Sign In'></Tab>
          <Tab LinkComponent={NavLink} to='/signup' label='Sign Up'></Tab>
          <Tab LinkComponent={NavLink} to='/contact-us' label='Contact Us'></Tab>
          <Tab LinkComponent={NavLink} to='/about-us' label='About Us'></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
