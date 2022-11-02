import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout_success } from '../Redux/auth/action';


export default function Navbar() {


  const user = useSelector((store) => store.userAuth);
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

            {user.auth ? (
               user.data.type === "recruiter" ? (
                <>
                  <Link to="/" style={{ textDecoration: 'none' }}><Button sx={{ color: '#fff' }}>Home</Button></Link>
                  <Link to="/myjobs" style={{ textDecoration: 'none' }}><Button sx={{ color: '#fff' }}>MY JOBS</Button></Link>
                  <Link to="/addjobs" style={{ textDecoration: 'none' }}><Button sx={{ color: '#fff' }}>ADD JOBS</Button></Link>
                  <Link to="/logout" style={{ textDecoration: 'none' }} ><Button  sx={{ color: '#fff' }}>LOGOUT</Button></Link>
                </>
              ) : (
                <>
                  <Link to="/" style={{ textDecoration: 'none' }}><Button sx={{ color: '#fff' }}>Home</Button></Link>
                  <Link to="/applications" style={{ textDecoration: 'none' }}><Button  sx={{ color: '#fff' }}>MY APPLICATIONS</Button></Link>
                  <Link to="/logout" style={{ textDecoration: 'none' }} ><Button  sx={{ color: '#fff' }}>LOGOUT</Button></Link>
                </>
              )
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: 'none' }} ><Button sx={{ color: '#fff' }}>LOGIN</Button></Link>
                <Link to="/register" style={{ textDecoration: 'none' }} ><Button  sx={{ color: '#fff' }}>Register</Button></Link>
              </>    
            )}
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
