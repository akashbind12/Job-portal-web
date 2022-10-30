import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {


  const [userType, setUserType] = useState("recuiter")

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 4, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
          >
            JOB PORTAL
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             <Link to="/" style={{ textDecoration: 'none' }}>
              <Button  sx={{ color: '#fff' }}>
                Home
              </Button></Link>
              {userType ? 
             <Link to="/myjobs" style={{ textDecoration: 'none' }}><Button  sx={{ color: '#fff' }}>
                MY JOBS
              </Button></Link>
              :  
              <Button  sx={{ color: '#fff' }}>
                MY APPLICATIONS
              </Button> }
              {userType ? <Link to="/addjobs" style={{ textDecoration: 'none' }}>
                <Button  sx={{ color: '#fff' }}>
                ADD JOBS
              </Button>
              </Link> : null }
              <Button  sx={{ color: '#fff' }}>
                LOGOUT
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
