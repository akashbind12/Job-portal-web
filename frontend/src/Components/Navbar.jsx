import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {


  const [userType, setUserType] = useState("recuiter")
  const [auth, setAuth] = useState(true)
  const user = useSelector((store) => store.userAuth);

  const handleLogout = () => {
    
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
          >
            JOB PORTAL
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             {user.auth && <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff' }}>
                Home
              </Button></Link>}
              { user.type=="recuiter" ? 
               user.auth && <Link to="/myjobs" style={{ textDecoration: 'none' }}><Button  sx={{ color: '#fff' }}>
                MY JOBS
              </Button></Link> 
              :  
               user.auth && <Button  sx={{ color: '#fff' }}>
                MY APPLICATIONS
              </Button> }
              {user.auth && user.type=="recuiter" ? <Link to="/addjobs" style={{ textDecoration: 'none' }}>
                <Button  sx={{ color: '#fff' }}>
                ADD JOBS
              </Button>
              </Link> : null }
            {auth ? null : <Button sx={{ color: '#fff' }}>
              LOGOUT
            </Button>}
             {!user.auth && <Link to="/login" style={{ textDecoration: 'none' }} ><Button sx={{ color: '#fff' }}>
              LOGIN
             </Button></Link>}
             {!user.auth && <Link to="/register" style={{ textDecoration: 'none' }} ><Button  sx={{ color: '#fff' }}>
                Register
            </Button></Link>}
            {user.auth && <Button  sx={{ color: '#fff' }} onClick={handleLogout} >
                LOGOUT
             </Button>}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
