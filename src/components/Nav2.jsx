import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const navstyle = {

  background: 'transparent',
  backdropFilter: 'blur(10px)'
}

const textstyled = {
  color: 'grey',
  fontFamily: 'Lucida Handwriting',
  fontWeight: 'bold'
  
}



const buttonstyle = {
  color: '#fff',
  background: 'black',
  padding: '5px 15px',
  marginLeft: '5px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    marginRight: '5px',
    marginLeft: '5px'
  }
}

const linkstyle = {
  color: 'white',
  textDecoration: 'none'
}


export default function Nav2() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={navstyle}>
        <Toolbar>
          <IconButton
            style={buttonstyle}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={textstyled} variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Resto Cafe
          </Typography>
          <Button color="inherit" href="/" style={buttonstyle}>
          <Link to='/' style={linkstyle} ><HomeIcon /> Home</Link>
          </Button>
          {/* <Button color="inherit" style={{...buttonstyle,marginLeft:'20px',marginRight:'20px'}}>
            <Link to='/login' style={linkstyle} ><AccountCircleIcon />Signin</Link></Button> */}
          <Button color="inherit" style={buttonstyle}>
          <Link to='/' style={linkstyle} >
            <LogoutIcon /> Logout</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}